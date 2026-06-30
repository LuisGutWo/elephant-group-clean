import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import ContactInfoFields from "./ContactInfoFields";
import FileUploadField from "./FileUploadField";
import EMAIL_API from "../../config/emailApi";
import { getRecaptchaSiteKey } from "@/config/recaptcha";
import styles from "./ContactForm.module.css";

const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), {
  ssr: false,
});

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState({ type: "", msg: "" });
  const [loading, setLoading] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [csrfToken, setCsrfToken] = useState("");

  const recaptchaSiteKey = getRecaptchaSiteKey();
  const isRecaptchaConfigured = Boolean(recaptchaSiteKey);
  const usesSameOriginApi = EMAIL_API.sendFullContact.startsWith("/");

  useEffect(() => {
    if (!usesSameOriginApi) return;
    const loadCsrfToken = async () => {
      try {
        const res = await fetch("/api/csrf-token", { method: "GET" });
        if (res.ok) {
          const data = await res.json();
          if (data?.csrfToken) setCsrfToken(data.csrfToken);
        }
      } catch (err) {
        console.error("Failed to load CSRF token:", err);
      }
    };
    loadCsrfToken();
  }, [usesSameOriginApi]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (selectedFile) => {
    setFile(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setStatus({
        type: "error",
        msg: "Todos los campos obligatorios deben ser completados.",
      });
      return;
    }
    if (!isRecaptchaConfigured || !recaptchaToken) {
      setStatus({
        type: "error",
        msg: "Por favor complete la verificación reCAPTCHA.",
      });
      return;
    }

    setLoading(true);
    setStatus({ type: "", msg: "" });

    try {
      const submitData = new FormData();
      submitData.append("name", name.trim());
      submitData.append("email", email.trim());
      submitData.append("subject", subject.trim());
      submitData.append("message", message.trim());
      submitData.append("recaptchaToken", recaptchaToken);
      if (file) submitData.append("file", file);

      const headers = {};
      if (usesSameOriginApi && csrfToken) headers["x-csrf-token"] = csrfToken;

      const response = await fetch(EMAIL_API.sendFullContact, {
        method: "POST",
        headers,
        body: submitData,
      });

      if (!response.ok)
        throw new Error("Error al procesar la solicitud en el servidor.");

      setStatus({
        type: "success",
        msg: "¡Mensaje y archivo enviados con éxito! Te responderemos a la brevedad.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setFile(null);
      setRecaptchaToken("");
    } catch (err) {
      setStatus({
        type: "error",
        msg:
          err.message || "Ocurrió un error inesperado al enviar el formulario.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className={styles.formSection}
      aria-labelledby="contact-form-title"
    >
      <div className={styles.formCard}>
        <h2 id="contact-form-title" className={styles.title}>
          Formulario de Contacto Avanzado
        </h2>

        {status.msg && (
          <div
            className={`${styles.alert} ${
              status.type === "success"
                ? styles.alertSuccess
                : styles.alertError
            }`}
            role="alert"
          >
            {status.msg}
          </div>
        )}

        <form onSubmit={handleSubmit} className={styles.form} noValidate>
          <ContactInfoFields
            formData={formData}
            handleInputChange={handleInputChange}
          />

          <div className={styles.formGroup}>
            <label htmlFor="form-subject" className={styles.label}>
              Asunto *
            </label>
            <input
              type="text"
              id="form-subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="form-message" className={styles.label}>
              Mensaje *
            </label>
            <textarea
              id="form-message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className={styles.textarea}
              rows="5"
              required
            />
          </div>

          <FileUploadField onFileSelect={handleFileChange} currentFile={file} />

          <div className={styles.actionsContainer}>
            {isRecaptchaConfigured && (
              <div className={styles.recaptchaWrap}>
                <ReCAPTCHA
                  sitekey={recaptchaSiteKey}
                  onChange={(token) => setRecaptchaToken(token || "")}
                  onExpired={() => setRecaptchaToken("")}
                />
              </div>
            )}

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={loading}
            >
              {loading ? "ENVIANDO..." : "ENVIAR SOLICITUD"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Form;
