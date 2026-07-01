import React from "react";
import styles from "./PrivacyPolicyContent.module.css";

function PrivacyPolicyContent() {
  return (
    <section
      className={styles["privacy-policy-content"]}
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <article
              className={styles["policy-article"]}
              itemProp="mainEntity"
              itemScope
              itemType="https://schema.org/Article"
            >
              {/* Introducción */}
              <div
                className={`${styles["policy-section"]} ${styles["intro-section"]}`}
              >
                <p className={styles["lead-text"]} itemProp="description">
                  En <strong>Elephant Group</strong>, valoramos y respetamos tu
                  privacidad. Esta Política de Privacidad describe cómo
                  recopilamos, usamos, almacenamos y protegemos tu información
                  personal cuando utilizas nuestros servicios de implementos
                  publicitarios, señalética y diseño gráfico.
                </p>
                <p className={styles["update-date"]}>
                  <strong>Última actualización:</strong> 24 de noviembre de 2025
                </p>
              </div>

              {/* Sección 1: Información que Recopilamos */}
              <div
                className={styles["policy-section"]}
                id="informacion-recopilada"
              >
                <h2 className={styles["section-title"]}>
                  <span className={styles["section-number"]}>01</span>
                  Información que Recopilamos
                </h2>
                <p>
                  Recopilamos diferentes tipos de información para brindarte el
                  mejor servicio posible:
                </p>

                <h3 className={styles["subsection-title"]}>
                  Información Personal
                </h3>
                <ul className={styles["policy-list"]}>
                  <li>
                    <strong>Datos de contacto:</strong> Nombre completo,
                    dirección de correo electrónico, número de teléfono,
                    dirección física.
                  </li>
                  <li>
                    <strong>Información comercial:</strong> Nombre de la
                    empresa, RUT, giro comercial, cargo.
                  </li>
                  <li>
                    <strong>Detalles del proyecto:</strong> Especificaciones
                    técnicas, archivos de diseño, preferencias de materiales.
                  </li>
                </ul>

                <h3 className={styles["subsection-title"]}>
                  Información Técnica
                </h3>
                <ul className={styles["policy-list"]}>
                  <li>Dirección IP y ubicación geográfica aproximada</li>
                  <li>Tipo de navegador, versión y configuración de idioma</li>
                  <li>Páginas visitadas, tiempo de permanencia y clicks</li>
                  <li>Dispositivo utilizado (desktop, móvil, tablet)</li>
                </ul>
              </div>

              {/* Sección 2: Cómo Usamos tu Información */}
              <div className={styles["policy-section"]} id="uso-informacion">
                <h2 className={styles["section-title"]}>
                  <span className={styles["section-number"]}>02</span>
                  Cómo Usamos tu Información
                </h2>
                <p>Utilizamos tu información personal para:</p>

                <div className={styles["usage-grid"]}>
                  <div className={styles["usage-card"]}>
                    <div className={styles["card-icon"]}>📋</div>
                    <h4>Gestión de Servicios</h4>
                    <p>
                      Procesar cotizaciones, gestionar pedidos y coordinar la
                      producción de implementos publicitarios.
                    </p>
                  </div>

                  <div className={styles["usage-card"]}>
                    <div className={styles["card-icon"]}>💬</div>
                    <h4>Comunicación</h4>
                    <p>
                      Responder consultas, enviar confirmaciones de pedidos y
                      actualizaciones de proyectos.
                    </p>
                  </div>

                  <div className={styles["usage-card"]}>
                    <div className={styles["card-icon"]}>📊</div>
                    <h4>Mejora Continua</h4>
                    <p>
                      Analizar el uso del sitio web para mejorar nuestros
                      servicios y experiencia de usuario.
                    </p>
                  </div>

                  <div className={styles["usage-card"]}>
                    <div className={styles["card-icon"]}>🔒</div>
                    <h4>Seguridad</h4>
                    <p>
                      Prevenir fraudes, proteger nuestros sistemas y garantizar
                      la seguridad de tus datos.
                    </p>
                  </div>

                  <div className={styles["usage-card"]}>
                    <div className={styles["card-icon"]}>📢</div>
                    <h4>Marketing</h4>
                    <p>
                      Enviarte información sobre nuevos productos, servicios y
                      promociones (con tu consentimiento).
                    </p>
                  </div>

                  <div className={styles["usage-card"]}>
                    <div className={styles["card-icon"]}>⚖️</div>
                    <h4>Cumplimiento Legal</h4>
                    <p>
                      Cumplir con obligaciones legales, regulatorias y
                      contractuales aplicables.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sección 3: Compartir Información */}
              <div
                className={styles["policy-section"]}
                id="compartir-informacion"
              >
                <h2 className={styles["section-title"]}>
                  <span className={styles["section-number"]}>03</span>
                  Compartir tu Información
                </h2>
                <p>
                  No vendemos ni alquilamos tu información personal. Solo
                  compartimos tus datos en las siguientes circunstancias:
                </p>

                <div
                  className={`${styles["info-box"]} ${styles["warning-box"]}`}
                >
                  <h4>🤝 Proveedores de Servicios</h4>
                  <p>
                    Compartimos información con proveedores confiables que nos
                    ayudan a operar nuestro negocio (servicios de hosting,
                    procesamiento de pagos, mensajería).
                  </p>
                </div>

                <div
                  className={`${styles["info-box"]} ${styles["info-box-neutral"]}`}
                >
                  <h4>⚖️ Requisitos Legales</h4>
                  <p>
                    Podemos divulgar información cuando sea requerido por ley,
                    orden judicial o proceso legal aplicable.
                  </p>
                </div>

                <div
                  className={`${styles["info-box"]} ${styles["info-box-neutral"]}`}
                >
                  <h4>🏢 Transferencia de Negocio</h4>
                  <p>
                    En caso de fusión, adquisición o venta de activos, tu
                    información podría ser transferida a la nueva entidad.
                  </p>
                </div>
              </div>

              {/* Sección 4: Cookies y Tecnologías Similares */}
              <div className={styles["policy-section"]} id="cookies">
                <h2 className={styles["section-title"]}>
                  <span className={styles["section-number"]}>04</span>
                  Cookies y Tecnologías Similares
                </h2>
                <p>
                  Utilizamos cookies y tecnologías similares para mejorar tu
                  experiencia en nuestro sitio web:
                </p>

                <table className={styles["cookies-table"]}>
                  <thead>
                    <tr>
                      <th>Tipo de Cookie</th>
                      <th>Propósito</th>
                      <th>Duración</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>Esenciales</strong>
                      </td>
                      <td>
                        Necesarias para el funcionamiento básico del sitio
                      </td>
                      <td>Sesión</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Funcionales</strong>
                      </td>
                      <td>Recordar preferencias y configuraciones</td>
                      <td>1 año</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Analíticas</strong>
                      </td>
                      <td>Analizar el uso del sitio y mejorar el servicio</td>
                      <td>2 años</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Marketing</strong>
                      </td>
                      <td>Personalizar anuncios y medir efectividad</td>
                      <td>6 meses</td>
                    </tr>
                  </tbody>
                </table>

                <p className={styles["note-text"]}>
                  Puedes gestionar tus preferencias de cookies en la
                  configuración de tu navegador.
                </p>
              </div>

              {/* Sección 5: Seguridad de Datos */}
              <div className={styles["policy-section"]} id="seguridad">
                <h2 className={styles["section-title"]}>
                  <span className={styles["section-number"]}>05</span>
                  Seguridad de tus Datos
                </h2>
                <p>
                  Implementamos medidas de seguridad técnicas, administrativas y
                  físicas para proteger tu información:
                </p>

                <ul className={styles["security-list"]}>
                  <li>🔐 Cifrado SSL/TLS en todas las comunicaciones</li>
                  <li>🛡️ Firewalls y sistemas de detección de intrusos</li>
                  <li>👥 Acceso restringido solo a personal autorizado</li>
                  <li>
                    💾 Copias de seguridad regulares y almacenamiento seguro
                  </li>
                  <li>
                    🔄 Actualizaciones periódicas de sistemas de seguridad
                  </li>
                  <li>📝 Auditorías de seguridad y evaluaciones de riesgos</li>
                </ul>
              </div>

              {/* Sección 6: Tus Derechos */}
              <div className={styles["policy-section"]} id="derechos">
                <h2 className={styles["section-title"]}>
                  <span className={styles["section-number"]}>06</span>
                  Tus Derechos
                </h2>
                <p>
                  De acuerdo con la Ley N° 19.628 sobre Protección de Datos
                  Personales en Chile, tienes derecho a:
                </p>

                <div className={styles["rights-grid"]}>
                  <div className={styles["right-card"]}>
                    <h4>📖 Acceso</h4>
                    <p>
                      Solicitar una copia de la información personal que tenemos
                      sobre ti.
                    </p>
                  </div>

                  <div className={styles["right-card"]}>
                    <h4>✏️ Rectificación</h4>
                    <p>
                      Corregir datos inexactos o incompletos en nuestros
                      registros.
                    </p>
                  </div>

                  <div className={styles["right-card"]}>
                    <h4>🗑️ Eliminación</h4>
                    <p>
                      Solicitar la eliminación de tus datos personales (sujeto a
                      obligaciones legales).
                    </p>
                  </div>

                  <div className={styles["right-card"]}>
                    <h4>🚫 Oposición</h4>
                    <p>
                      Oponerte al procesamiento de tu información para ciertos
                      fines.
                    </p>
                  </div>

                  <div className={styles["right-card"]}>
                    <h4>📤 Portabilidad</h4>
                    <p>
                      Recibir tus datos en formato estructurado y transferirlos
                      a otro proveedor.
                    </p>
                  </div>

                  <div className={styles["right-card"]}>
                    <h4>⏸️ Limitación</h4>
                    <p>
                      Restringir el procesamiento de tu información en ciertas
                      circunstancias.
                    </p>
                  </div>
                </div>

                <div
                  className={`${styles["info-box"]} ${styles["contact-box"]}`}
                >
                  <h4>Ejercer tus Derechos</h4>
                  <p>
                    Para ejercer cualquiera de estos derechos, Contáctanos en:
                  </p>
                  <p>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:contacto@elephantgroup.cl">
                      contacto@elephantgroup.cl
                    </a>
                  </p>
                  <p>
                    <strong>Teléfono:</strong> +56 9 5163 1370
                  </p>
                </div>
              </div>

              {/* Sección 7: Retención de Datos */}
              <div className={styles["policy-section"]} id="retencion">
                <h2 className={styles["section-title"]}>
                  <span className={styles["section-number"]}>07</span>
                  Retención de Datos
                </h2>
                <p>
                  Conservamos tu información personal solo durante el tiempo
                  necesario para cumplir con los propósitos descritos en esta
                  política, a menos que la ley requiera o permita un período de
                  retención más largo.
                </p>

                <ul className={styles["policy-list"]}>
                  <li>
                    <strong>Datos de clientes activos:</strong> Durante la
                    relación comercial y hasta 7 años después por requisitos
                    fiscales.
                  </li>
                  <li>
                    <strong>Cotizaciones no aceptadas:</strong> 2 años desde la
                    última interacción.
                  </li>
                  <li>
                    <strong>Datos de marketing:</strong> Hasta que retires tu
                    consentimiento o solicites su eliminación.
                  </li>
                </ul>
              </div>

              {/* Sección 8: Menores de Edad */}
              <div className={styles["policy-section"]} id="menores">
                <h2 className={styles["section-title"]}>
                  <span className={styles["section-number"]}>08</span>
                  Protección de Menores
                </h2>
                <p>
                  Nuestros servicios están dirigidos a empresas y profesionales.
                  No recopilamos intencionalmente información de menores de 18
                  años sin el consentimiento parental. Si descubrimos que hemos
                  recopilado datos de un menor sin autorización, eliminaremos
                  esa información de inmediato.
                </p>
              </div>

              {/* Sección 9: Enlaces Externos */}
              <div className={styles["policy-section"]} id="enlaces-externos">
                <h2 className={styles["section-title"]}>
                  <span className={styles["section-number"]}>09</span>
                  Enlaces a Sitios de Terceros
                </h2>
                <p>
                  Nuestro sitio web puede contener enlaces a sitios de terceros.
                  No somos responsables de las prácticas de privacidad de estos
                  sitios. Te recomendamos leer sus políticas de privacidad antes
                  de proporcionar cualquier información.
                </p>
              </div>

              {/* Sección 10: Cambios en la Política */}
              <div className={styles["policy-section"]} id="cambios">
                <h2 className={styles["section-title"]}>
                  <span className={styles["section-number"]}>10</span>
                  Cambios en esta Política
                </h2>
                <p>
                  Podemos actualizar esta Política de Privacidad periódicamente
                  para reflejar cambios en nuestras prácticas o requisitos
                  legales. Te notificaremos sobre cambios significativos a
                  través de:
                </p>

                <ul className={styles["policy-list"]}>
                  <li>
                    Un aviso destacado en nuestro sitio web durante 30 días
                  </li>
                  <li>
                    Correo electrónico a la dirección registrada en tu cuenta
                  </li>
                  <li>
                    Actualización de la fecha de &ldquo;Última
                    actualización&rdquo; en esta página
                  </li>
                </ul>
              </div>

              {/* Sección 11: Contacto */}
              <div
                className={`${styles["policy-section"]} ${styles["contact-section"]}`}
                id="contacto"
              >
                <h2 className={styles["section-title"]}>
                  <span className={styles["section-number"]}>11</span>
                  Contacto
                </h2>
                <p>
                  Si tienes preguntas, inquietudes o solicitudes relacionadas
                  con esta Política de Privacidad, contáctanos:
                </p>

                <div className={styles["contact-info-grid"]}>
                  <div className={styles["contact-item"]}>
                    <h4>📧 Correo Electrónico</h4>
                    <a href="mailto:contacto@elephantgroup.cl">
                      contacto@elephantgroup.cl
                    </a>
                  </div>

                  <div className={styles["contact-item"]}>
                    <h4>📱 Teléfono</h4>
                    <a href="tel:+56951631370">+56 9 5163 1370</a>
                  </div>

                  <div className={styles["contact-item"]}>
                    <h4>📍 Dirección</h4>
                    <p>
                      Viña del Mar, Valparaíso y V Región
                      <br />
                      Chile
                    </p>
                  </div>

                  <div className={styles["contact-item"]}>
                    <h4>🏢 Razón Social</h4>
                    <p>Elephant Group - LAGmedia</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicyContent;
