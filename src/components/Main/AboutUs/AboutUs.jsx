import React from "react";
import Image from "next/image";
import styles from "./AboutUs.module.css";

function AboutUs() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Nosotros</h2>
        <p className={styles.sectionDescription}>
          En <strong>Elephant Group</strong> sabemos lo important que es para tu
          negocio contar con{" "}
          <strong>productos de calidad, personalizados y a tiempo.</strong> Por
          eso trabajamos con los mejores materiales, diseñamos soluciones únicas
          que reflejan tu identidad y aseguramos{" "}
          <strong>tiempos de entrega rápidos</strong> para que siempre estén un
          paso adelante.
        </p>

        <div className={styles.aboutFeatures}>
          <article className={styles.aboutItem}>
            <div className={styles.aboutIcon}>
              <Image
                src="/images/serv-icons/pencil-icon.svg"
                alt="Icono de materiales profesionales y duraderos"
                width={120}
                height={120}
                loading="lazy"
              />
            </div>
            <h3 className={styles.itemTitle}>
              MATERIALES PROFESIONALES Y DURADEROS
            </h3>
          </article>

          <article className={styles.aboutItem}>
            <div className={styles.aboutIcon}>
              <Image
                src="/images/serv-icons/tool-icon.svg"
                alt="Icono de fabricación propia sin intermediarios"
                width={120}
                height={120}
                loading="lazy"
              />
            </div>
            <h3 className={styles.itemTitle}>
              FABRICACIÓN PROPIA (NO INTERMEDIARIOS)
            </h3>
          </article>

          <article className={styles.aboutItem}>
            <div className={styles.aboutIcon}>
              <Image
                src="/images/serv-icons/clock-icon.svg"
                alt="Icono de producción ágil según necesidad"
                width={120}
                height={120}
                loading="lazy"
              />
            </div>
            <h3 className={styles.itemTitle}>
              PRODUCCIÓN ÁGIL SEGÚN NECESIDAD
            </h3>
          </article>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
