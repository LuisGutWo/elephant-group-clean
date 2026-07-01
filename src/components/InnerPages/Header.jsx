import React from "react";
import styles from "./Header.module.css";

function Header({ data, subBg, background }) {
  if (!data) {
    throw new Error("Data is null in Header component");
  }
  if (!data.title || !data.subTitle || !data.text) {
    throw new Error("Data is missing required properties in Header component");
  }
  return (
    <header className={styles.header}>
      <div
        className={styles.backgroundImage}
        style={{
          backgroundImage: `url(${background || data.background})`,
        }}
        aria-hidden="true"
      />
      <div className={styles.backgroundOverlay} aria-hidden="true" />
      <div className={styles.container}>
        <div className={styles.grid}>
          <div>
            <div className={styles.caption}>
              <p className={styles.eyebrow}>{data.subTitle}</p>
              <h1 className={styles.title}>{data.title}</h1>
            </div>
          </div>
          <div className={styles.descriptionWrap}>
            <div className={styles.description}>
              <p>
                Impulsa tu marca con soluciones publicitarias a medida. En
                Elephant Group, te guiamos de principio a fin para que tu
                empresa destaque con una imagen profesional y efectiva.
              </p>
              <p>
                Somos expertos en señalética, material POP, gigantografías y
                merchandising en Viña del Mar, Valparaiso y V Region. Confía en
                nuestro equipo para potenciar tu presencia y captar más
                clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Marquee opcional, si se requiere, puede agregarse aquí */}
    </header>
  );
}

export default Header;
