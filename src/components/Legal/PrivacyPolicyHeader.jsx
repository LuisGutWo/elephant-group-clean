import React from "react";
import Link from "next/link";
import styles from "./PrivacyPolicyHeader.module.css";

function PrivacyPolicyHeader() {
  return (
    <header
      className={styles["privacy-policy-header"]}
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
                      <span itemProp="name">Política de Privacidad</span>
                      <meta itemProp="position" content="2" />
                    </li>
                  </ol>
                </nav>
              </div>

              <div className={styles["header-text"]}>
                <p className={styles["sub-title"]} itemProp="about">
                  <span className={styles["dot-decoration"]}></span>
                  Transparencia y Confianza
                </p>
                <h1 className={styles["main-title"]} itemProp="headline">
                  Política de Privacidad
                </h1>
                <p className={styles["description"]} itemProp="description">
                  Tu privacidad es nuestra prioridad. Conoce cómo protegemos y
                  gestionamos tu información personal de manera responsable y
                  transparente.
                </p>
              </div>

              <div className={styles["header-features"]}>
                <div className={styles["feature-item"]}>
                  <div className={styles["feature-icon"]}>🔒</div>
                  <div className={styles["feature-text"]}>
                    <strong>100% Seguro</strong>
                    <span>Datos protegidos con cifrado SSL</span>
                  </div>
                </div>

                <div className={styles["feature-item"]}>
                  <div className={styles["feature-icon"]}>⚖️</div>
                  <div className={styles["feature-text"]}>
                    <strong>Cumplimiento Legal</strong>
                    <span>Ley N° 19.628 de Chile</span>
                  </div>
                </div>

                <div className={styles["feature-item"]}>
                  <div className={styles["feature-icon"]}>👁️</div>
                  <div className={styles["feature-text"]}>
                    <strong>Transparencia Total</strong>
                    <span>Control sobre tus datos</span>
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

export default PrivacyPolicyHeader;
