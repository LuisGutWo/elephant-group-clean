import React from "react";
import Image from "next/image";
//= Assets
const catalogoPDF = `${process.env.PUBLIC_URL || ""}/catalogo_impresion.pdf`;
//= Data
import data from "@/data/Main/services.json";
import Link from "next/link";
import styles from "./Services.module.css";

const serviceRouteById = {
  1: "/services/adhesivos",
  2: "/services/letreros",
  3: "/services/diseno",
};

function Services() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerBlock}>
          <div className={styles.headerGrid}>
            <article className={styles.headerMain}>
              <div className={styles.headerContent}>
                <Link
                  href={catalogoPDF}
                  passHref
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Catálogo"
                  className={styles.catalogLink}
                >
                  <h6 className={styles.catalogBadge}>
                    <span>Catálogo</span>
                    <span className={styles.catalogDot}>
                      <span className={styles.arrowIcon} aria-hidden="true">
                        &gt;
                      </span>
                    </span>
                  </h6>
                </Link>
                <h2 className={styles.title}>Nuestros Servicios</h2>
              </div>
            </article>
            <article className={styles.headerSide}>
              <div className={styles.description}>
                <p>
                  Ofrecemos soluciones de impresión en diferentes formatos,
                  ideales para quienes buscan destacar con materiales visuales
                  de alto impacto. Contamos con tecnología de vanguardia y
                  maquinaria propia, lo que nos permite controlar cada detalle
                  del proceso y asegurar resultados excepcionales.
                </p>
                <p>
                  Desde letreros y gigantografías hasta pendones y señaléticas,
                  trabajamos con materiales de la más alta calidad, como PVC,
                  trovicel y acrílicos, garantizando acabados duraderos y
                  atractivos.
                </p>
                <Link
                  href={catalogoPDF}
                  passHref
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Catálogo"
                  className={styles.catalogLink}
                >
                  <h6
                    className={`${styles.catalogBadge} ${styles.catalogBadgeAlt}`}
                  >
                    <span>Ver más servicios</span>
                    <span className={styles.catalogDot}>
                      <span className={styles.arrowIcon} aria-hidden="true">
                        &gt;
                      </span>
                    </span>
                  </h6>
                </Link>
              </div>
            </article>
          </div>
        </div>
        <article className={styles.cardsGrid}>
          {data.map((item) => (
            <div className={styles.cardItem} key={item.id}>
              <Link
                href={serviceRouteById[item.id] || "/quote"}
                className={styles.cardLink}
              >
                <div className={styles.iconWrap}>
                  <Image
                    src={item.image}
                    alt="Service Icon Image - Elephant Group"
                    width={100}
                    height={100}
                    className={styles.iconImage}
                  />
                </div>
                <h4 className={styles.cardTitle}>{item.title}</h4>
                <h6 className={styles.cardSubtitle}>
                  {item.subtitle}

                  <span className={styles.catalogDot}>
                    <span className={styles.arrowIcon} aria-hidden="true">
                      &gt;
                    </span>
                  </span>
                </h6>
                <p className={styles.cardText}>{item.text}</p>
              </Link>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}

export default Services;
