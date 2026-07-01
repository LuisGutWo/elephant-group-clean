import React from "react";
import Link from "next/link";
import styles from "./TermsHeader.module.css";

function TermsHeader() {
  return (
    <header
      className={styles["terms-header"]}
      itemScope
      itemType="https://schema.org/WebPageElement"
      itemProp="mainContentOfPage"
    >
      <div className={styles["header-overlay"]}></div>
      <div className={styles["header-pattern"]}></div>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles["header-content"]}>
              <div className={styles["breadcrumb-nav"]}>
                <nav aria-label="breadcrumb">
                  <ol
                    className={styles["breadcrumb"]}
                    itemScope
                    itemType="https://schema.org/BreadcrumbList"
                  >
                    <li
                      className={styles["breadcrumb-item"]}
                      itemProp="itemListElement"
                      itemScope
                      itemType="https://schema.org/ListItem"
                    >
                      <Link href="/" itemProp="item">
                        <span itemProp="name">Inicio</span>
                      </Link>
                      <meta itemProp="position" content="1" />
                    </li>
                    <li
                      className={`${styles["breadcrumb-item"]} ${styles["active"]}`}
                      itemProp="itemListElement"
                      itemScope
                      itemType="https://schema.org/ListItem"
                      aria-current="page"
                    >
                      <span itemProp="name">Términos y Condiciones</span>
                      <meta itemProp="position" content="2" />
                    </li>
                  </ol>
                </nav>
              </div>

              <div className={styles["header-text"]}>
                <p className={styles["sub-title"]} itemProp="about">
                  <span className={styles["dot-decoration"]}></span>
                  Acuerdo Legal
                </p>
                <h1 className={styles["main-title"]} itemProp="headline">
                  Términos y Condiciones
                </h1>
                <p className={styles["description"]} itemProp="description">
                  Condiciones generales que regulan el uso de nuestros servicios
                  de implementos publicitarios, señalética y diseño gráfico.
                </p>
              </div>

              <div className={styles["header-features"]}>
                <div className={styles["feature-item"]}>
                  <div className={styles["feature-icon"]}>📜</div>
                  <div className={styles["feature-text"]}>
                    <strong>Acuerdo Vinculante</strong>
                    <span>Términos claros y transparentes</span>
                  </div>
                </div>

                <div className={styles["feature-item"]}>
                  <div className={styles["feature-icon"]}>⚖️</div>
                  <div className={styles["feature-text"]}>
                    <strong>Marco Legal</strong>
                    <span>Legislación chilena aplicable</span>
                  </div>
                </div>

                <div className={styles["feature-item"]}>
                  <div className={styles["feature-icon"]}>🤝</div>
                  <div className={styles["feature-text"]}>
                    <strong>Relación Profesional</strong>
                    <span>Derechos y obligaciones</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default TermsHeader;
