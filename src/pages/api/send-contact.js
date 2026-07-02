import nodemailer from "nodemailer";
import xss from "xss";
import formidable from "formidable";
import { readFile } from "node:fs/promises";
import { isValidCsrf } from "./_utils/csrf";

export const config = {
  api: {
    bodyParser: false,
  },
};

// Local/dev fallback:
// Loading dotenv here guarantees SMTP vars are available for local testing.
if (process.env.NODE_ENV === "development" && !process.env.SMTP_HOST) {
  require("dotenv").config({ path: "../../../../.env.local" });
}

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  if (!isValidCsrf(req)) {
    res.status(403).json({ message: "CSRF token inválido o ausente." });
    return;
  }

  let payload;
  try {
    payload = await parseRequestPayload(req);
  } catch {
    res.status(400).json({ message: "No se pudo leer el formulario enviado." });
    return;
  }

  const {
    name,
    company,
    email,
    phone,
    subject,
    details,
    message,
    recaptchaToken,
    file,
  } = payload;

  if (!recaptchaToken) {
    res.status(400).json({ message: "Falta el token de reCAPTCHA." });
    return;
  }

  const isDevelopment = process.env.NODE_ENV === "development";
  const hasLocalhostSiteKey = Boolean(
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY_LOCALHOST,
  );
  const localhostSecret = process.env.RECAPTCHA_SECRET_KEY_LOCALHOST || "";

  let secretKey = process.env.RECAPTCHA_SECRET_KEY || "";
  if (isDevelopment) {
    // Si en localhost se usa la site key de prueba, validar con secret de prueba.
    if (!hasLocalhostSiteKey) {
      secretKey = process.env.RECAPTCHA_SECRET_KEY_LOCALHOST || "";
    } else if (localhostSecret) {
      secretKey = localhostSecret;
    }
  }

  if (!secretKey) {
    res.status(500).json({ message: "RECAPTCHA_SECRET_KEY no configurada." });
    return;
  }

  try {
    const recaptchaRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: secretKey,
          response: recaptchaToken,
        }).toString(),
      },
    );
    const recaptchaData = await recaptchaRes.json();
    if (!recaptchaData.success) {
      res.status(400).json({
        message: "Error de verificación reCAPTCHA. Intenta nuevamente.",
        details: recaptchaData["error-codes"] || [],
      });
      return;
    }
  } catch {
    res.status(400).json({ message: "No se pudo verificar reCAPTCHA." });
    return;
  }

  const sanitize = (str) => xss((str || "").trim());
  const safeName = sanitize(name);
  const safeCompany = sanitize(company);
  const safeEmail = sanitize(email);
  const safePhone = sanitize(phone);
  const safeSubject = sanitize(subject);
  const safeMessage = sanitize(message);
  const safeDetails = details ? xss(formatDetails(details)) : "";

  if (!safeName || !safeEmail || !safeMessage) {
    res.status(400).json({ message: "Faltan campos requeridos." });
    return;
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(safeEmail)) {
    res.status(400).json({ message: "Email inválido." });
    return;
  }

  // Validar variables de entorno
  const { SMTP_HOST, SMTP_USER, SMTP_PASS, CONTACT_RECIPIENT } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_RECIPIENT) {
    res
      .status(500)
      .json({ message: "Variables de entorno SMTP no configuradas" });
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: 587,
      secure: false, // false para 587 (TLS)
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    let html = `<h2>Nuevo contacto desde el sitio web</h2>`;
    html += `<p><b>Nombre:</b> ${safeName}</p>`;
    if (safeCompany) {
      html += `<p><b>Empresa:</b> ${safeCompany}</p>`;
    }
    html += `<p><b>Email:</b> ${safeEmail}</p>`;
    if (safePhone) {
      html += `<p><b>Teléfono:</b> ${safePhone}</p>`;
    }
    if (safeSubject) {
      html += `<p><b>Asunto:</b> ${safeSubject}</p>`;
    }
    if (safeDetails) {
      html += `<pre>${safeDetails}</pre>`;
    }
    html += `<p><b>Mensaje:</b> ${safeMessage}</p>`;

    const attachments = [];
    if (file?.filepath) {
      const fileBuffer = await readFile(file.filepath);
      attachments.push({
        filename: safeFileName(file.originalFilename || "adjunto"),
        content: fileBuffer,
        contentType: file.mimetype || "application/octet-stream",
      });
    }

    const mailOptions = {
      from: `Web Contact <${SMTP_USER}>`,
      to: CONTACT_RECIPIENT,
      subject: safeSubject
        ? `Nuevo contacto: ${safeSubject}`
        : `Nuevo contacto de ${safeName}`,
      html,
      attachments,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Correo enviado correctamente" });
  } catch (err) {
    res.status(500).json({
      message: "Error enviando correo. Intenta nuevamente más tarde.",
    });
  }
}

const firstValue = (value) => {
  if (Array.isArray(value)) return value[0] || "";
  return value || "";
};

const safeFileName = (fileName) =>
  String(fileName)
    .replace(/[\\/]+/g, "_")
    .replace(/[^a-zA-Z0-9._ -]/g, "_")
    .slice(0, 150);

const formatDetails = (details) => {
  if (typeof details === "string") {
    return details;
  }

  try {
    return JSON.stringify(details, null, 2);
  } catch {
    return "";
  }
};

const readRawBody = async (req) => {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }
  return Buffer.concat(chunks).toString("utf8");
};

const parseMultipart = (req) => {
  const form = formidable({
    multiples: false,
    maxFileSize: 10 * 1024 * 1024,
    allowEmptyFiles: false,
  });

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({ fields, files });
    });
  });
};

const parseRequestPayload = async (req) => {
  const contentType = (req.headers["content-type"] || "").toLowerCase();

  if (contentType.includes("multipart/form-data")) {
    const { fields, files } = await parseMultipart(req);
    const attachedFile = Array.isArray(files.file) ? files.file[0] : files.file;

    return {
      name: firstValue(fields.name),
      company: firstValue(fields.company),
      email: firstValue(fields.email),
      phone: firstValue(fields.phone),
      subject: firstValue(fields.subject),
      details: firstValue(fields.details),
      message: firstValue(fields.message),
      recaptchaToken: firstValue(fields.recaptchaToken),
      file: attachedFile || null,
    };
  }

  const rawBody = await readRawBody(req);
  const data = rawBody ? JSON.parse(rawBody) : {};

  return {
    ...data,
    file: null,
  };
};
