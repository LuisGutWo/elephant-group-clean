import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./FooterBottom.module.css";

const FooterBottom = () => {
  // Se cambia la ruta antigua a la ubicación moderna unificada
  const logoSrc = "/images/logo/logo-eg-new-white.png";

  return (
    <footer
      className={styles.footerBottom}
      itemScope
      itemType="https://schema.org"
      role="contentinfo"
      aria-label="Pie de página inferior"
    >
      <div className={styles.container}>
        {/* Navegación horizontal */}
        <nav
          className={styles.footerNav}
          role="navigation"
          aria-label="Enlaces del pie de página"
        >
          <Link
            href="/blog"
            className={styles.footerLink}
            aria-label="Ir al blog"
          >
            Blog
          </Link>
          <span className={styles.separator} aria-hidden="true">
            |
          </span>
          <a
            href="https://mercadolibre.com.ar"
            className={styles.footerLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver productos en Mercado Libre"
          >
            Mercado Libre
          </a>
          <span className={styles.separator} aria-hidden="true">
            |
          </span>
          <Link
            href="/politica-privacidad"
            className={styles.footerLink}
            aria-label="Leer política de privacidad"
          >
            Política de Privacidad
          </Link>
          <span className={styles.separator} aria-hidden="true">
            |
          </span>
          <Link
            href="/terminos"
            className={styles.footerLink}
            aria-label="Leer términos y condiciones"
          >
            Términos y Condiciones
          </Link>
        </nav>

        {/* Logo centrado */}
        <div className={styles.logoContainer}>
          <Link href="/" aria-label="Ir a la página principal" itemProp="url">
            <Image
              src={logoSrc}
              alt="Elephant Group - Imprenta y servicios gráficos en Valparaíso"
              className={styles.logo}
              width={140}
              height={45}
              priority
              itemProp="logo"
            />
          </Link>
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          <small>
            © {new Date().getFullYear()} Elephant Group — LAGmedia. Todos los
            derechos reservados
          </small>
        </div>
      </div>
    </footer>
  );
};

export default FooterBottom;
