import React from "react";
import { useRouter } from "next/router";
import styles from "./TopNavbar.module.css";

const TopNavbar = ({ mainBg, curve, hidden = false }) => {
  const router = useRouter();

  const handleWhatsAppClick = () => {
    if (typeof window === "undefined" || !window.location) {
      console.error(
        "Error while opening WhatsApp link: Window is not available",
      );
      return;
    }

    const url = "https://whatsapp.com?";

    try {
      window.open(url, "_blank", "noopener noreferrer");
    } catch (error) {
      console.error("Error while opening WhatsApp link:", error);
    }
  };

  const handleQuoteClick = (e) => {
    e.preventDefault();
    if (router.pathname === "/" || router.pathname === "/home") {
      const formSection = document.getElementById("footer-image");

      if (formSection) {
        const navbarHeight = 80;
        const elementPosition = formSection.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      } else {
        console.warn("Formulario no encontrado en la página");
      }
    } else {
      router.push("/contact");
    }
  };

  return (
    <nav
      className={`${styles.topNavbar} ${mainBg ? styles.mainBg : ""} ${
        curve ? styles.curve : ""
      } ${hidden ? styles.hidden : ""}`}
    >
      <div className={styles.container}>
        {/* Redes sociales - Izquierda */}
        <div className={styles.socialContainer}>
          <a
            className={styles.socialLink}
            href="https://instagram.com"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://w3.org"
              fill="currentColor"
              viewBox="0 0 16 16"
              className={styles.iconSvg}
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
            </svg>
          </a>
          <a
            className={styles.socialLink}
            href="https://facebook.com"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Facebook"
          >
            <svg
              xmlns="http://w3.org"
              fill="currentColor"
              viewBox="0 0 16 16"
              className={styles.iconSvg}
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
            </svg>
          </a>
        </div>

        {/* WhatsApp y botón - Derecha */}
        <div className={styles.contactContainer}>
          <button
            className={styles.whatsappBtn}
            onClick={handleWhatsAppClick}
            type="button"
            aria-label="Contactar por WhatsApp"
          >
            <svg
              xmlns="http://w3.org"
              fill="currentColor"
              viewBox="0 0 16 16"
              className={styles.whatsappIcon}
            >
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.618-4.954c-.199-.1-.1.173-.8-.174-.199-.1-.343-.1-.487.1-.144.2-.557.695-.683.84-.127.145-.253.16-.452.06s-.842-.31-1.605-.989c-.593-.529-1.001-1.182-1.117-1.38-.117-.199-.012-.307.088-.406.09-.088.199-.232.299-.348.1-.115.133-.198.199-.332.066-.133.033-.25-.016-.35-.05-.1-.487-1.175-.668-1.613-.177-.426-.355-.368-.487-.375-.127-.007-.273-.007-.42-.007s-.384.055-.584.274c-.2.219-.76.742-.76 1.81s.78 2.102.889 2.247c.11.144 1.537 2.348 3.725 3.29.519.223.924.357 1.24.457.521.166.99.143 1.36.088.413-.06 1.261-.515 1.439-1.013.178-.499.178-.927.124-1.013-.055-.088-.2-.137-.398-.237" />
            </svg>
          </button>
          <span className={styles.phoneNumber}>+56 9 5163 1370</span>

          <button
            className={styles.quoteBtn}
            type="button"
            aria-label="Cotiza ahora"
            onClick={handleQuoteClick}
          >
            Cotiza ahora
          </button>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
