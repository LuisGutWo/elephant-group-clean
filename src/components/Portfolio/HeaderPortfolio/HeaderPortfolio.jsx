import React from "react";
import styles from "./HeaderPortfolio.module.css";

function HeaderPortfolio({ data }) {
  if (!data) {
    throw new Error("Data is null or undefined in HeaderPortfolio component");
  }
  if (!data.subTitle || !data.title) {
    throw new Error(
      "Data is missing required properties in HeaderPortfolio component",
    );
  }

  return (
    <header
      className={styles.headerBase}
      role="banner"
      aria-label="Encabezado del portafolio"
      itemScope
      itemType="https://schema.org"
    >
      {/* Fondo optimizado mediante CSS puro y encapsulado */}
      <div className={styles.backgroundImg} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.caption}>
          <p className={styles.eyebrow}>{data.subTitle}</p>
          <h1 className={styles.title} itemProp="headline">
            {data.title}
          </h1>
          {data.description && (
            <p className={styles.description} itemProp="description">
              {data.description}
            </p>
          )}
        </div>
      </div>
    </header>
  );
}

export default HeaderPortfolio;
