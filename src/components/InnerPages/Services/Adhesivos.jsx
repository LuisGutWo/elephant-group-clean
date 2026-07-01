import React from "react";
import Link from "next/link";
import styles from "./Adhesivos.module.css";

function Adhesivos() {
  return (
    <section className={styles.servicesDetails}>
      <div className={styles.container}>
        <div className={styles.layout}>
          <article className={styles.mainColumn}>
            <div className={styles.content}>
              <div className={styles.blockLg}>
                <h2>Adhesivos Publicitarios Personalizados</h2>
                <p className={styles.paragraph}>
                  Nuestro servicio de adhesivos está orientado a potenciar la
                  visibilidad de tu marca en vitrinas, muros, vehículos y puntos
                  de venta. Producimos adhesivos personalizados con alta calidad
                  de impresión, colores vibrantes y excelente adherencia.
                </p>
                <p className={styles.paragraph}>
                  Trabajamos con distintos materiales y terminaciones para
                  interior y exterior, incluyendo adhesivos de larga duración,
                  removibles y de uso promocional. Entregamos soluciones a
                  medida según superficie, tamaño y objetivo comercial.
                </p>
              </div>

              <div className={styles.blockLg}>
                <h3>Tipos de Adhesivos</h3>
                <div className={styles.typesGrid}>
                  <div className={styles.typeItem}>
                    <div className={styles.itemBox}>
                      <h5 className={styles.itemTitle}>
                        <i
                          className={`fas fa-check-circle ${styles.itemIcon}`}
                          aria-hidden="true"
                        ></i>
                        Vinilo Adhesivo Impreso
                      </h5>
                      <p>
                        Gráficas personalizadas para vitrinas, muros, paneles y
                        superficies lisas con terminación profesional.
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
                        Empavonados y Decorativos
                      </h5>
                      <p>
                        Soluciones para vidrios y oficinas que entregan
                        privacidad, diseño y control visual del espacio.
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
                        Adhesivos de Corte
                      </h5>
                      <p>
                        Letras, logotipos y formas en corte preciso para
                        branding corporativo y señalización.
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
                        Adhesivos Vehiculares
                      </h5>
                      <p>
                        Rotulación para autos, flotas y utilitarios con
                        materiales resistentes a clima y lavado.
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
                        Etiquetas Adhesivas
                      </h5>
                      <p>
                        Etiquetas para productos, envases y promociones en
                        distintos tamaños, formatos y tirajes.
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
                        Instalación de Adhesivos
                      </h5>
                      <p>
                        Montaje profesional para asegurar acabado limpio,
                        alineado y sin burbujas en cada aplicación.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.blockLg}>
                <h3>Ventajas de Nuestros Adhesivos</h3>
                <ul className={styles.checkList}>
                  <li>Alta adherencia y durabilidad en interior y exterior</li>
                  <li>Personalización completa de tamaños, formas y diseños</li>
                  <li>Materiales removibles o permanentes según necesidad</li>
                  <li>Impresión de alta definición con colores intensos</li>
                  <li>Aplicación profesional en vitrinas, muros y vehículos</li>
                  <li>Soluciones efectivas para branding y promociones</li>
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
                    <p>Vitrinas, vidrios, muros, vehículos y exhibidores</p>
                  </div>
                  <div className={styles.infoItem}>
                    <h6>Materiales</h6>
                    <p>Vinilo blanco, transparente, microperforado y más</p>
                  </div>
                  <div className={styles.infoItem}>
                    <h6>Terminaciones</h6>
                    <p>Brillante, mate, laminado y corte personalizado</p>
                  </div>
                  <div className={styles.infoItem}>
                    <h6>Resistencia</h6>
                    <p>Opciones para uso interior y exterior prolongado</p>
                  </div>
                  <div className={styles.infoItem}>
                    <h6>Instalación</h6>
                    <p>Servicio especializado de aplicación y montaje</p>
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
                      Letreros
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/senaleticas"
                      className={styles.serviceLink}
                    >
                      Señaléticas
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
                    <Link href="/quote" className={styles.serviceLink}>
                      Cotización
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

export default Adhesivos;
