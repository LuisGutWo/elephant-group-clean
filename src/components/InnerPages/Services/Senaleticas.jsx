import React from "react";
import Link from "next/link";
import styles from "./Senaleticas.module.css";

function Señaleticas() {
  return (
    <section className={styles.servicesDetails}>
      <div className={styles.container}>
        <div className={styles.layout}>
          <article className={styles.mainColumn}>
            <div className={styles.content}>
              <div className={styles.blockLg}>
                <h2>Señalética Profesional para Empresas</h2>
                <p className={styles.paragraph}>
                  Nuestro servicio de señalética está pensado para empresas,
                  oficinas, locales comerciales y espacios institucionales que
                  necesitan orientar, informar e identificar sus áreas con una
                  imagen clara y profesional. Desarrollamos soluciones visuales
                  funcionales, duraderas y alineadas con la identidad de cada
                  marca.
                </p>
                <p className={styles.paragraph}>
                  Fabricamos señaléticas interiores y exteriores utilizando
                  materiales resistentes y terminaciones de calidad. Combinamos
                  diseño, impresión, corte CNC e instalación para entregar un
                  sistema completo de comunicación visual adaptado a cada
                  proyecto.
                </p>
              </div>

              <div className={styles.blockLg}>
                <h3>Tipos de Señalética</h3>
                <div className={styles.typesGrid}>
                  <div className={styles.typeItem}>
                    <div className={styles.itemBox}>
                      <h5 className={styles.itemTitle}>
                        <i
                          className={`fas fa-check-circle ${styles.itemIcon}`}
                          aria-hidden="true"
                        ></i>
                        Señalética Corporativa
                      </h5>
                      <p>
                        Identificación de recepciones, oficinas, salas y áreas
                        internas con una estética coherente con tu marca.
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
                        Señales de Orientación
                      </h5>
                      <p>
                        Sistemas visuales para guiar recorridos, accesos,
                        salidas, estacionamientos y puntos de atención.
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
                        Señalética de Seguridad
                      </h5>
                      <p>
                        Señales informativas, preventivas y normativas para
                        espacios laborales, comerciales e industriales.
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
                        Señalética Exterior
                      </h5>
                      <p>
                        Soluciones resistentes para fachadas, accesos y zonas
                        expuestas, pensadas para alta visibilidad y duración.
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
                        Directorios y Placas Informativas
                      </h5>
                      <p>
                        Placas, totems y directorios para identificar áreas,
                        niveles, servicios y espacios de atención al público.
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
                        Fabricación e Instalación Integral
                      </h5>
                      <p>
                        Ejecutamos el proyecto completo desde el diseño hasta el
                        montaje final para asegurar uniformidad y calidad.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.blockLg}>
                <h3>Ventajas de Nuestra Señalética</h3>
                <ul className={styles.checkList}>
                  <li>
                    Diseño funcional y alineado con la identidad de tu marca
                  </li>
                  <li>Materiales durables para interior y exterior</li>
                  <li>Mejor orientación y experiencia dentro del espacio</li>
                  <li>Producción personalizada según medidas y necesidades</li>
                  <li>Instalación profesional y terminaciones limpias</li>
                  <li>Alta visibilidad, orden y comunicación efectiva</li>
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
                    <h6>Aplicaciones</h6>
                    <p>Interior, exterior, orientación y seguridad</p>
                  </div>
                  <div className={styles.infoItem}>
                    <h6>Materiales</h6>
                    <p>Acrílico, PVC, trovicel, aluminio y vinilo</p>
                  </div>
                  <div className={styles.infoItem}>
                    <h6>Terminaciones</h6>
                    <p>Corte CNC, impresión, laminado y montaje</p>
                  </div>
                  <div className={styles.infoItem}>
                    <h6>Personalización</h6>
                    <p>Medidas, formas y gráfica adaptadas al proyecto</p>
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
                      Letreros Personalizados
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/letreros"
                      className={styles.serviceLink}
                    >
                      Corte CNC
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/adhesivos"
                      className={styles.serviceLink}
                    >
                      Impresión Digital
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
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Señaleticas;
