import React from "react";
import styles from "./Marq.module.css";

function Marq() {
  const words = [
    "Impresión",
    "Corte",
    "Publicidad",
    "Adhesivos",
    "Señaléticas",
    "Letreros",
    "Vinilos",
    "Stickers",
    "Gráficos",
    "Reflectivos",
    "Banners",
    "Lonas Publicitarias",
    "Paneles Publicitarios",
    "Revestimientos Publicitarios",
  ];

  return (
    <section className={styles.marqSection}>
      <div className={styles.container}>
        <div className={styles.mainMarq}>
          <div className={styles.slideTrack}>
            {/* Bloque original */}
            <div className={styles.slideBlock}>
              {words.map((word, index) => (
                <div key={`orig-${index}`} className={styles.item}>
                  <h4>
                    <span>{word}</span>
                    <span className={styles.icon} aria-hidden="true">
                      *
                    </span>
                  </h4>
                </div>
              ))}
            </div>
            {/* Bloque duplicado para el bucle infinito sin saltos visuales */}
            <div className={styles.slideBlock} aria-hidden="true">
              {words.map((word, index) => (
                <div key={`dup-${index}`} className={styles.item}>
                  <h4>
                    <span>{word}</span>
                    <span className={styles.icon} aria-hidden="true">
                      *
                    </span>
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Marq;
