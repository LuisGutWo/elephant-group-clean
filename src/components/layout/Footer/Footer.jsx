import { useEffect, useState, useMemo } from "react";
import dynamic from "next/dynamic";
import {
  facebookSvg,
  geoTagSvg,
  instagramSvg,
  linkedinSvg,
  mailSvg,
  timeSvg,
  whatsAppSvg2,
} from "@/data/Main/icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EMAIL_API } from "@/config/emailApi";
import { getRecaptchaSiteKey } from "@/config/recaptcha";
import { siteConfig } from "@/config/site";
import styles from "./Footer.module.css";

const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), {
  ssr: false,
});

gsap.registerPlugin(ScrollTrigger);

export default function Footer({ subBg }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", msg: "" });
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const STATUS_AUTO_CLOSE = 4000;
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [csrfToken, setCsrfToken] = useState("");
  const [isClient, setIsClient] = useState(false);
  const recaptchaSiteKey = useMemo(() => getRecaptchaSiteKey(), []);
  const isRecaptchaConfigured = Boolean(recaptchaSiteKey);
  const usesSameOriginApi = EMAIL_API.sendSimpleContact.startsWith("/");

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (status.type === "success" || status.type === "error") {
      setShowStatusModal(true);
      const timer = setTimeout(() => {
        setShowStatusModal(false);
        setStatus({ type: "", msg: "" });
      }, STATUS_AUTO_CLOSE);
      return () => clearTimeout(timer);
    }
  }, [status]);

  useEffect(() => {
    if (
      window.innerWidth > 991 &&
      document.querySelector(`.${styles.footer}`)
    ) {
      gsap.set(`.${styles.footer}`, { yPercent: -30 });
      const uncover = gsap.timeline({ paused: true });
      uncover.to(`.${styles.footer}`, { yPercent: 0, ease: "none" });
      ScrollTrigger.create({
        trigger: "main",
        start: "bottom bottom",
        end: "+=30%",
        animation: uncover,
        scrub: true,
      });
    }
  }, []);

  useEffect(() => {
    if (!isClient || !usesSameOriginApi) return;
    const loadCsrfToken = async () => {
      try {
        const res = await fetch("/api/csrf-token", {
          method: "GET",
          credentials: "include",
        });
        if (!res.ok) return;
        const data = await res.json();
        if (data?.csrfToken) setCsrfToken(data.csrfToken);
      } catch {
        // Si falla, se informa al intentar enviar.
      }
    };
    loadCsrfToken();
  }, [isClient, usesSameOriginApi]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const isValidEmail = (email) =>
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email,
    );

  const isSpammy = (text) => {
    if (!text) return true;
    const trimmed = text.trim();
    if (trimmed.length < 10) return true;
    if (/^(.)\1+$/.test(trimmed)) return true;
    return false;
  };

  const closeModal = () => {
    setShowStatusModal(false);
    setStatus({ type: "", msg: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const name = form.name.trim();
      const email = form.email.trim();
      const message = form.message.trim();

      if (!name || !email || !message) {
        setStatus({
          type: "error",
          msg: "Por favor complete nombre, correo y mensaje válidos.",
        });
        return;
      }
      if (name.length < 3 || name.length > 50) {
        setStatus({
          type: "error",
          msg: "El nombre debe tener entre 3 y 50 caracteres.",
        });
        return;
      }
      if (!isValidEmail(email) || email.length > 80) {
        setStatus({
          type: "error",
          msg: "Ingrese un correo electrónico válido (máx. 80 caracteres).",
        });
        return;
      }
      if (isSpammy(message) || message.length > 1000) {
        setStatus({
          type: "error",
          msg: "El mensaje debe tener entre 10 y 1000 caracteres y no ser repetitivo.",
        });
        return;
      }
      if (!isRecaptchaConfigured) {
        setStatus({
          type: "error",
          msg: "reCAPTCHA no está configurado para este entorno.",
        });
        return;
      }
      if (!recaptchaToken) {
        setStatus({
          type: "error",
          msg: "Por favor completa el reCAPTCHA para continuar.",
        });
        return;
      }
      if (usesSameOriginApi && !csrfToken) {
        setStatus({
          type: "error",
          msg: "Token de seguridad no disponible. Recarga la página e intenta nuevamente.",
        });
        return;
      }

      setLoading(true);

      const headers = { "Content-Type": "application/json" };
      if (usesSameOriginApi) headers["x-csrf-token"] = csrfToken;

      const response = await fetch(EMAIL_API.sendSimpleContact, {
        method: "POST",
        headers,
        body: JSON.stringify({ name, email, message, recaptchaToken }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        let backendMessage = "";
        try {
          backendMessage = JSON.parse(errorText)?.message || "";
        } catch {
          // texto plano
        }
        throw new Error(
          backendMessage || `Error sending message: ${response.status}`,
        );
      }

      setStatus({
        type: "success",
        msg: "¡Tu mensaje fue enviado con éxito! Nuestro equipo te responderá pronto. ¡Gracias por confiar en Elephant Group!",
      });
      setForm({ name: "", email: "", message: "" });
      setRecaptchaToken("");
    } catch (err) {
      setStatus({
        type: "error",
        msg:
          err?.message ||
          "No pudimos enviar tu mensaje. Intenta nuevamente o contáctanos por WhatsApp.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className={`${styles.footer} ${subBg ? styles.subBg : ""}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.url,
            logo: `${siteConfig.url}/images/logo/logo-light.webp`,
            description: siteConfig.description,
            address: {
              "@type": "PostalAddress",
              streetAddress: "3 Oriente 974 (entre 10 y 11 Norte)",
              addressLocality: siteConfig.address.locality,
              addressRegion: siteConfig.address.region,
              addressCountry: siteConfig.address.country,
            },
            telephone: siteConfig.phone,
            email: siteConfig.email,
            sameAs: [
              "https://www.facebook.com/elephantgroupchile",
              "https://www.instagram.com/elephantgroupchile/",
              "https://www.linkedin.com/company/elephantgroupchile/",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: siteConfig.phone,
              contactType: "customer service",
              areaServed: "CL",
              availableLanguage: ["Spanish"],
              email: siteConfig.email,
            },
          }),
        }}
      />

      <div className={styles.egFooterTop}>
        <div className={styles.container}>
          <div className={styles.egContactCol}>
            <h3>CONTACTO</h3>
            <ul className={styles.egContactList}>
              <li>
                <span className={styles.egIcon}>{geoTagSvg}</span>
                <div>
                  <strong>Ubicación</strong>
                  <div>
                    3 Oriente 974 (entre 10 y 11 Norte), Viña del Mar - Chile
                  </div>
                </div>
              </li>
              <li>
                <span className={styles.egIcon}>{whatsAppSvg2}</span>
                <div>
                  <strong>Teléfono</strong>
                  <div>+56 9 93239203</div>
                </div>
              </li>
              <li>
                <span className={styles.egIcon}>{mailSvg}</span>
                <div>
                  <strong>Correo electrónico</strong>
                  <div>ventas@elephantgroup.cl</div>
                </div>
              </li>
              <li>
                <span className={styles.egIcon}>{timeSvg}</span>
                <div>
                  <strong>Horario de atención</strong>
                  <div>Lunes a Viernes 10:00 - 14:00 • 15:00 - 18:00 hrs</div>
                </div>
              </li>
            </ul>
          </div>

          <div className={styles.egFormCol} id="cotizacion-form">
            <div className={styles.egFormCard}>
              <h4>ENVIAR UN MENSAJE</h4>

              {showStatusModal && (
                <div
                  className={styles.modalOverlay}
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="status-modal-title"
                  onClick={closeModal}
                >
                  <div
                    className={`${styles.modalContent} ${
                      status.type === "success"
                        ? styles.successBorder
                        : styles.errorBorder
                    }`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className={styles.modalHeader}>
                      <h3 id="status-modal-title" className={styles.modalTitle}>
                        {status.type === "success"
                          ? "✔️ ¡Enviado correctamente!"
                          : "⛔ No se pudo enviar"}
                      </h3>
                      <button
                        type="button"
                        className={styles.modalClose}
                        onClick={closeModal}
                        aria-label="Cerrar"
                      >
                        ×
                      </button>
                    </div>
                    <div className={styles.modalBody}>
                      <p>{status.msg}</p>
                    </div>
                  </div>
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className={styles.egContactForm}
                noValidate
                aria-label="Formulario de contacto principal"
              >
                <label className={styles.inputLabel} htmlFor="footer-name">
                  Nombre
                </label>
                <input
                  id="footer-name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  aria-describedby="footer-name-desc"
                  aria-invalid={
                    status.type === "error" && !form.name ? "true" : "false"
                  }
                  className={styles.formInput}
                />
                <span id="footer-name-desc" className={styles.srOnly}>
                  Campo obligatorio. Ingrese su nombre completo.
                </span>

                <label className={styles.inputLabel} htmlFor="footer-email">
                  Correo electrónico
                </label>
                <input
                  id="footer-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  aria-describedby="footer-email-desc"
                  aria-invalid={
                    status.type === "error" && !form.email ? "true" : "false"
                  }
                  className={styles.formInput}
                />
                <span id="footer-email-desc" className={styles.srOnly}>
                  Campo obligatorio. Ingrese un correo electrónico válido.
                </span>

                <label className={styles.inputLabel} htmlFor="footer-message">
                  Mensaje
                </label>
                <textarea
                  id="footer-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  required
                  aria-required="true"
                  aria-describedby="footer-message-desc"
                  aria-invalid={
                    status.type === "error" && !form.message ? "true" : "false"
                  }
                  className={styles.formTextarea}
                />
                <span id="footer-message-desc" className={styles.srOnly}>
                  Campo obligatorio. Escriba su mensaje.
                </span>

                <div className={styles.egFormActions}>
                  {isClient && isRecaptchaConfigured && (
                    <ReCAPTCHA
                      sitekey={recaptchaSiteKey}
                      onChange={(token) => setRecaptchaToken(token || "")}
                      onExpired={() => setRecaptchaToken("")}
                      onErrored={() => setRecaptchaToken("")}
                    />
                  )}
                  {isClient && !isRecaptchaConfigured && (
                    <div className={styles.errorText}>
                      reCAPTCHA no configurado. Define
                      NEXT_PUBLIC_RECAPTCHA_SITE_KEY en Vercel.
                    </div>
                  )}

                  <button
                    type="submit"
                    className={styles.egBtnPrimary}
                    disabled={loading}
                    aria-label={loading ? "Enviando mensaje" : "Enviar mensaje"}
                  >
                    {loading ? "ENVIANDO..." : "ENVIAR"}
                  </button>

                  <div className={styles.egFooterSocial}>
                    <h5>Síguenos en:</h5>
                    <div className={styles.egSocialLinks}>
                      <a
                        href="https://www.instagram.com/elephantgroupchile/"
                        aria-label="Instagram"
                        className={styles.egSocial}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {instagramSvg}
                      </a>

                      <a
                        href="https://www.facebook.com/elephantgroupchile"
                        aria-label="Facebook"
                        className={styles.egSocial}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {facebookSvg}
                      </a>

                      <a
                        href="https://www.linkedin.com/company/elephantgroupchile/"
                        aria-label="LinkedIn"
                        className={styles.egSocial}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {linkedinSvg}
                      </a>
                    </div>
                  </div>
                </div>

                {process.env.NODE_ENV === "development" && (
                  <div className={styles.devNotice}>
                    <b>Modo desarrollo:</b> El reCAPTCHA puede mostrar
                    advertencias si la clave no es válida para localhost.
                  </div>
                )}

                {status.type && (
                  <div
                    role="status"
                    aria-live="polite"
                    className={styles.srOnly}
                  >
                    {status.msg}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
