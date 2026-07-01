import React from "react";
import Link from "next/link";
import styles from "./Letreros.module.css";

function Letreros() {
  return (
    <section className={styles.servicesDetails}>
      <div className={styles.container}>
        <div className={styles.layout}>
          <article className={styles.mainColumn}>
            <div className={styles.content}>
              <div className={styles.blockLg}>
                <h2>Letreros Profesionales Personalizados</h2>
                <p className={styles.paragraph}>
                  Nuestro servicio de letreros está diseñado para comercios,
                  empresas y negocios que desean destacar con identidad visual
                  profesional. Creamos letreros de alto impacto visual
                  utilizando tecnología de corte CNC y impresión de gran formato
                  con colores vibrantes y detalles excepcionales.
                </p>
                <p className={styles.paragraph}>
                  Ideal para fachadas, interiores, señalética corporativa y
                  aplicaciones que requieran máxima visibilidad. Trabajamos con
                  diversos materiales como acrílicos, trovicel, madera, aluminio
                  compuesto y vinilos según las necesidades de tu proyecto.
                </p>
              </div>

              <div className={styles.blockLg}>
                <h3>Tipos de Letreros</h3>
                <div className={styles.typesGrid}>
                  <div className={styles.typeItem}>
                    <div className={styles.itemBox}>
                      <h5 className={styles.itemTitle}>
                        <i
                          className={`fas fa-check-circle ${styles.itemIcon}`}
                          aria-hidden="true"
                        ></i>
                        Letreros Cortados CNC
                      </h5>
                      <p>
                        Letreros precisos y personalizados cortados en acrílico,
                        madera, aluminio compuesto y trovicel para fachadas y
                        espacios interiores.
                      </p>
                    </div>
                  </div>
                  <div className={styles.typeItem}>
                    <div className={styles.itemBox}>
                      <h5 className={styles.itemTitle}>
                        <i
                          className={`fas fa-check-circle ${styles.itemIcon}`}
                          aria-hidden="true"
                        ></i>
                        Letreros Impresos
                      </h5>
                      <p>
                        Letreros de gran formato impresos en vinilo adhesivo,
                        tela PVC, canvas y magnéticos con colores vibrantes.
                      </p>
                    </div>
                  </div>
                  <div className={styles.typeItem}>
                    <div className={styles.itemBox}>
                      <h5 className={styles.itemTitle}>
                        <i
                          className={`fas fa-check-circle ${styles.itemIcon}`}
                          aria-hidden="true"
                        ></i>
                        Rótulos y Nombres Corporativos
                      </h5>
                      <p>
                        Identificación de empresa y comercios con diseño
                        personalizados que reflejan tu identidad corporativa.
                      </p>
                    </div>
                  </div>
                  <div className={styles.typeItem}>
                    <div className={styles.itemBox}>
                      <h5 className={styles.itemTitle}>
                        <i
                          className={`fas fa-check-circle ${styles.itemIcon}`}
                          aria-hidden="true"
                        ></i>
                        Señalética Profesional
                      </h5>
                      <p>
                        Señales de navegación, información y orientación para
                        comercios, oficinas y espacios públicos.
                      </p>
                    </div>
                  </div>
                  <div className={styles.typeItem}>
                    <div className={styles.itemBox}>
                      <h5 className={styles.itemTitle}>
                        <i
                          className={`fas fa-check-circle ${styles.itemIcon}`}
                          aria-hidden="true"
                        ></i>
                        Letreros Iluminados
                      </h5>
                      <p>
                        Letreros con retroiluminación para máxima visibilidad
                        nocturna y presencia impactante.
                      </p>
                    </div>
                  </div>
                  <div className={styles.typeItem}>
                    <div className={styles.itemBox}>
                      <h5 className={styles.itemTitle}>
                        <i
                          className={`fas fa-check-circle ${styles.itemIcon}`}
                          aria-hidden="true"
                        ></i>
                        Instalación y Montaje Profesional
                      </h5>
                      <p>
                        Instalación especializada en fachadas, interiores y
                        espacios especiales con garantía de calidad.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.blockLg}>
                <h3>Ventajas de Nuestros Letreros</h3>
                <ul className={styles.checkList}>
                  <li>Diseño personalizado para tu identidad corporativa</li>
                  <li>Múltiples materiales y acabados disponibles</li>
                  <li>Resistencia a intemperie para uso exterior prolongado</li>
                  <li>Instalación y montaje especializado incluido</li>
                  <li>Colores vibrantes y definición de calidad profesional</li>
                  <li>
                    Asesoramiento en ubicación y orientación para máxima
                    visibilidad
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <aside className={styles.sidebarColumn}>
            <div className={styles.sidebar}>
              <div className={`${styles.widgetBox} ${styles.widgetSpaced}`}>
                <h4 className={styles.widgetTitle}>
                  Especificaciones Técnicas
                </h4>
                <div className={styles.infoList}>
                  <div className={styles.infoItem}>
                    <h6>Tamaños Disponibles</h6>
                    <p>Desde pequeños rótulos hasta 5+ metros</p>
                  </div>
                  <div className={styles.infoItem}>
                    <h6>Materiales Principales</h6>
                    <p>Acrílico, Trovicel, Madera, Aluminio, Vinilo</p>
                  </div>
                  <div className={styles.infoItem}>
                    <h6>Acabados</h6>
                    <p>Brillante, Mate, Translúcido, Iluminado</p>
                  </div>
                  <div className={styles.infoItem}>
                    <h6>Precisión de Corte</h6>
                    <p>CNC con tolerancia de ±1mm</p>
                  </div>
                </div>
              </div>

              <div className={`${styles.widgetBox} ${styles.widgetSpaced}`}>
                <h4 className={styles.widgetTitle}>
                  ¿Necesitas una Cotización?
                </h4>
                <p className={styles.widgetText}>
                  Contáctanos para recibir una cotización personalizada de tu
                  proyecto.
                </p>
                <Link href="/quote" className={styles.quoteButton}>
                  <span>Solicitar Cotización</span>
                </Link>
              </div>

              <div className={styles.widgetBox}>
                <h4 className={styles.widgetTitle}>Servicios Relacionados</h4>
                <ul className={styles.servicesLinks}>
                  <li>
                    <Link
                      href="/services/letreros"
                      className={styles.serviceLink}
                    >
                      Corte CNC Profesional
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/adhesivos"
                      className={styles.serviceLink}
                    >
                      Impresión Digital Gran Formato
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/diseno"
                      className={styles.serviceLink}
                    >
                      Diseño Personalizado
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/acabados"
                      className={styles.serviceLink}
                    >
                      Instalación y Montaje
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Letreros;
