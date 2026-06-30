import React from "react";
import styles from "./BlogHeader.module.css";

function BlogHeader() {
  return (
    <header className={styles.blogHeader} role="banner">
      {/* Patrón decorativo semántico optimizado */}
      <div className={styles.backgroundPattern} aria-hidden="true" />

      <section
        className={styles.container}
        itemScope
        itemType="https://schema.org"
      >
        <div className={styles.caption}>
          <p className={styles.subTitle}>NUESTRO BLOG</p>
          <h1 className={styles.mainTitle} itemProp="headline">
            Insights de la Industria Publicitaria
          </h1>
          <p className={styles.description} itemProp="description">
            Mantente actualizado con las últimas tendencias, tecnologías y
            estrategias en diseño gráfico, impresión, señalética y marketing
            publicitario.
          </p>
        </div>
        {/* Reemplazo nativo y semántico para el Divider de HeroUI */}
        <hr className={styles.divider} aria-hidden="true" />
      </section>
    </header>
  );
}

export default BlogHeader;
