import React from "react";
import styles from "./TermsContent.module.css";

function TermsContent() {
  return (
    <section
      className={styles["terms-content"]}
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <article
              className={styles["terms-article"]}
              itemProp="mainEntity"
              itemScope
              itemType="https://schema.org/Article"
            >
              {/* Introducción */}
              <div
                className={`${styles["terms-section"]} ${styles["intro-section"]}`}
              >
                <p className={styles["lead-text"]} itemProp="description">
                  Bienvenido a <strong>Elephant Group</strong>. Estos Términos y
                  Condiciones regulan el uso de nuestros servicios de
                  implementos publicitarios, señalética, diseño gráfico y
                  productos relacionados. Al utilizar nuestros servicios,
                  aceptas estos términos en su totalidad.
                </p>
                <p className={styles["update-date"]}>
                  <strong>Última actualización:</strong> 24 de noviembre de 2025
                </p>
              </div>

              {/* Sección 1: Definiciones */}
              <div className={styles["terms-section"]} id="definiciones">
                <h2 className={styles["section-title"]}>
                  <span className={styles["section-number"]}>01</span>
                  Definiciones
                </h2>
                <p>
                  Para efectos de estos Términos y Condiciones, se entenderá
                  por:
                </p>

                <div className={styles["definition-grid"]}>
                  <div className={styles["definition-card"]}>
                    <h4>
                      🏢 &quot;Elephant Group&quot; o &quot;Nosotros&quot;
                    </h4>
                    <p>
                      Se refiere a LAGmedia, operando bajo la marca comercial
                      Elephant Group, con domicilio en Valparaíso, Chile.
                    </p>
                  </div>

                  <div className={styles["definition-card"]}>
                    <h4>👤 &quot;Cliente&quot; o &quot;Usted&quot;</h4>
                    <p>
                      Persona natural o jurídica que solicita, contrata o
                      adquiere nuestros productos y servicios.
                    </p>
                  </div>

                  <div className={styles["definition-card"]}>
                    <h4>📦 &quot;Servicios&quot;</h4>
                    <p>
                      Todos los servicios ofrecidos por Elephant Group,
                      incluyendo diseño, producción e instalación de implementos
                      publicitarios.
                    </p>
                  </div>

                  <div className={styles["definition-card"]}>
                    <h4>🎨 &quot;Productos&quot;</h4>
                    <p>
                      Bienes tangibles resultantes de nuestros servicios:
                      señalética, letreros, banners, vinilos, merchandising,
                      etc.
                    </p>
                  </div>

                  <div className={styles["definition-card"]}>
                    <h4>💼 &quot;Cotización&quot;</h4>
                    <p>
                      Documento que detalla especificaciones técnicas, plazos de
                      entrega y valor comercial de los servicios solicitados.
                    </p>
                  </div>

                  <div className={styles["definition-card"]}>
                    <h4>📝 &quot;Orden de Trabajo&quot;</h4>
                    <p>
                      Confirmación formal del cliente que autoriza el inicio de
                      la producción según cotización aceptada.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sección 2: Aceptación de Términos */}
              <div className={styles["terms-section"]} id="aceptacion">
                <h2 className={styles["section-title"]}>
                  <span className={styles["section-number"]}>02</span>
                  Aceptación de Términos
                </h2>
                <p>
                  Al utilizar nuestros servicios, solicitar cotizaciones o
                  realizar pedidos, usted declara que:
                </p>

                <ul className={styles["terms-list"]}>
                  <li>
                    Ha leído, comprendido y acepta estos Términos y Condiciones
                    en su totalidad.
                  </li>
                  <li>
                    Es mayor de 18 años o tiene capacidad legal para contratar
                    servicios comerciales.
                  </li>
                  <li>
                    Si actúa en representación de una empresa, tiene la
                    autoridad legal para vincularla.
                  </li>
                  <li>
                    Toda la información proporcionada es verdadera, exacta y
                    actualizada.
                  </li>
                  <li>
                    Acepta cumplir con todas las leyes y regulaciones aplicables
                    en Chile.
                  </li>
                </ul>

                <div
                  className={`${styles["info-box"]} ${styles["warning-box"]}`}
                >
                  <h4>⚠️ Importante</h4>
                  <p>
                    Si no está de acuerdo con alguno de estos términos, le
                    solicitamos que no utilice nuestros servicios. El uso
                    continuado constituye la aceptación de estos términos.
                  </p>
                </div>
              </div>

              {/* Sección 3: Servicios Ofrecidos */}
              <div className={styles["terms-section"]} id="servicios">
                <h2 className={styles["section-title"]}>
                  <span className={styles["section-number"]}>03</span>
                  Servicios Ofrecidos
                </h2>
                <p>
                  Elephant Group ofrece una amplia gama de servicios en el área
                  de publicidad visual y comunicación gráfica:
                </p>

                <div className={styles["services-grid"]}>
                  <div className={styles["service-item"]}>
                    <div className={styles["service-icon"]}>🪧</div>
                    <h4>Señalética</h4>
                    <ul>
                      <li>Señalización comercial e institucional</li>
                      <li>Letreros luminosos y no luminosos</li>
                      <li>Placas identificatorias</li>
                    </ul>
                  </div>

                  <div className={styles["service-item"]}>
                    <div className={styles["service-icon"]}>🎨</div>
                    <h4>Diseño Gráfico</h4>
                    <ul>
                      <li>Identidad corporativa y branding</li>
                      <li>Diseño de logotipos y papelería</li>
                      <li>Material publicitario impreso</li>
                    </ul>
                  </div>

                  <div className={styles["service-item"]}>
                    <div className={styles["service-icon"]}>🖨️</div>
                    <h4>Impresión Digital</h4>
                    <ul>
                      <li>Gran formato (lonas, vinilos, adhesivos)</li>
                      <li>Impresión textil y sublimación</li>
                      <li>Ploteo y corte de vinilo</li>
                    </ul>
                  </div>

                  <div className={styles["service-item"]}>
                    <div className={styles["service-icon"]}>🎁</div>
                    <h4>Merchandising</h4>
                    <ul>
                      <li>Productos promocionales personalizados</li>
                      <li>Artículos corporativos</li>
                      <li>Packaging y embalaje</li>
                    </ul>
                  </div>
                </div>

                <p className={styles["note-text"]}>
                  Nos reservamos el derecho de modificar, suspender o
                  discontinuar cualquier servicio en cualquier momento sin
                  previo aviso.
                </p>
              </div>

              {/* Sección 4: Proceso de Cotización y Pedido */}
              <div className={styles["terms-section"]} id="proceso">
                <h2 className={styles["section-title"]}>
                  <span className={styles["section-number"]}>04</span>
                  Proceso de Cotización y Pedido
                </h2>

                <div className={styles["process-timeline"]}>
                  <div className={styles["timeline-item"]}>
                    <div className={styles["timeline-number"]}>1</div>
                    <div className={styles["timeline-content"]}>
                      <h4>Solicitud de Cotización</h4>
                      <p>
                        El cliente envía requerimientos detallados del proyecto
                        incluyendo especificaciones técnicas, cantidades y
                        plazos deseados.
                      </p>
                    </div>
                  </div>

                  <div className={styles["timeline-item"]}>
                    <div className={styles["timeline-number"]}>2</div>
                    <div className={styles["timeline-content"]}>
                      <h4>Evaluación y Propuesta</h4>
                      <p>
                        Elephant Group evalúa la viabilidad técnica y entrega
                        cotización detallada con especificaciones, plazos y
                        costos.
                      </p>
                    </div>
                  </div>

                  <div className={styles["timeline-item"]}>
                    <div className={styles["timeline-number"]}>3</div>
                    <div className={styles["timeline-content"]}>
                      <h4>Aprobación y Anticipo</h4>
                      <p>
                        El cliente aprueba la cotización y efectúa el pago del
                        anticipo (generalmente 50% del valor total) para iniciar
                        producción.
                      </p>
                    </div>
                  </div>

                  <div className={styles["timeline-item"]}>
                    <div className={styles["timeline-number"]}>4</div>
                    <div className={styles["timeline-content"]}>
                      <h4>Producción</h4>
                      <p>
                        Iniciamos la producción según especificaciones. El
                        cliente puede solicitar actualizaciones del progreso.
                      </p>
                    </div>
                  </div>

                  <div className={styles["timeline-item"]}>
                    <div className={styles["timeline-number"]}>5</div>
                    <div className={styles["timeline-content"]}>
                      <h4>Entrega y Pago Final</h4>
                      <p>
                        Se coordina entrega o instalación. El cliente cancela el
                        saldo pendiente antes o al momento de la entrega.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className={`${styles["info-box"]} ${styles["info-box-neutral"]}`}
                >
                  <h4>📋 Validez de Cotizaciones</h4>
                  <p>
                    Las cotizaciones tienen una validez de{" "}
                    <strong>15 días hábiles</strong> desde su emisión. Pasado
                    este plazo, los precios y disponibilidad pueden estar
                    sujetos a cambios.
                  </p>
                </div>
              </div>

              {/* Sección 5: Precios y Pagos */}
              <div className={styles["terms-section"]} id="precios">
                <h2 className={styles["section-title"]}>
                  <span className={styles["section-number"]}>05</span>
                  Precios y Formas de Pago
                </h2>

                <div className={styles["pricing-info"]}>
                  <h3 className={styles["subsection-title"]}>💰 Precios</h3>
                  <ul className={styles["terms-list"]}>
                    <li>
                      Todos los precios están expresados en pesos chilenos (CLP)
                      e incluyen IVA a menos que se indique lo contrario.
                    </li>
                    <li>
                      Los precios pueden variar según especificaciones técnicas,
                      cantidades, materiales y urgencia.
                    </li>
                    <li>
                      Nos reservamos el derecho de ajustar precios sin previo
                      aviso debido a variaciones en costos de materiales o tipo
                      de cambio.
                    </li>
                    <li>
                      Los costos de envío, instalación o montaje se cotizarán
                      por separado según ubicación y complejidad.
                    </li>
                  </ul>

                  <h3 className={styles["subsection-title"]}>
                    💳 Formas de Pago
                  </h3>
                  <div className={styles["payment-methods"]}>
                    <div className={styles["payment-card"]}>
                      <div className={styles["payment-icon"]}>🏦</div>
                      <h4>Transferencia Bancaria</h4>
                      <p>
                        Transferencia electrónica a cuenta corriente o cuenta
                        vista. Enviar comprobante para confirmar.
                      </p>
                    </div>

                    <div className={styles["payment-card"]}>
                      <div className={styles["payment-icon"]}>💵</div>
                      <h4>Efectivo</h4>
                      <p>
                        Pago en efectivo en nuestras oficinas previa
                        coordinación. Se emite boleta o factura.
                      </p>
                    </div>

                    <div className={styles["payment-card"]}>
                      <div className={styles["payment-icon"]}>🛒</div>
                      <h4>Mercado Pago</h4>
                      <p>
                        Pago mediante link de Mercado Pago con tarjetas de
                        crédito o débito.
                      </p>
                    </div>

                    <div className={styles["payment-card"]}>
                      <div className={styles["payment-icon"]}>📄</div>
                      <h4>Crédito (Empresas)</h4>
                      <p>
                        Crédito de 30 días para empresas con historial y
                        evaluación crediticia previa.
                      </p>
                    </div>
                  </div>

                  <div
                    className={`${styles["info-box"]} ${styles["payment-info-box"]}`}
                  >
                    <h4>📅 Estructura de Pagos</h4>
                    <ul>
                      <li>
                        <strong>Anticipo:</strong> 50% al aprobar cotización
                        (inicia producción)
                      </li>
                      <li>
                        <strong>Saldo:</strong> 50% antes de entrega o
                        instalación
                      </li>
                      <li>
                        <strong>Proyectos grandes:</strong> Pagos por hitos
                        según acuerdo
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Sección 6: Plazos de Entrega */}
              <div className={styles["terms-section"]} id="plazos">
                <h2 className={styles["section-title"]}>
                  <span className={styles["section-number"]}>06</span>
                  Plazos de Entrega
                </h2>
                <p>
                  Los plazos de entrega se establecen en la cotización y orden
                  de trabajo, sujetos a:
                </p>

                <ul className={styles["terms-list"]}>
                  <li>
                    <strong>Aprobación de diseños:</strong> Los plazos inician
                    tras aprobación final de diseños y confirmación de anticipo.
                  </li>
                  <li>
                    <strong>Disponibilidad de materiales:</strong> Algunos
                    materiales especiales pueden requerir tiempos adicionales de
                    importación.
                  </li>
                  <li>
                    <strong>Complejidad del proyecto:</strong> Trabajos
                    complejos o de gran envergadura pueden requerir plazos
                    extendidos.
                  </li>
                  <li>
                    <strong>Condiciones climáticas:</strong> Instalaciones
                    exteriores dependen de condiciones meteorológicas
                    favorables.
                  </li>
                </ul>

                <div
                  className={`${styles["info-box"]} ${styles["warning-box"]}`}
                >
                  <h4>⏱️ Retrasos y Modificaciones</h4>
                  <p>
                    Elephant Group no se hace responsable por retrasos causados
                    por: cambios solicitados por el cliente durante producción,
                    información incompleta o incorrecta, casos de fuerza mayor,
                    o problemas con proveedores externos. Cualquier modificación
                    solicitada después de iniciar producción puede resultar en
                    costos adicionales y extensión de plazos.
                  </p>
                </div>
              </div>

              {/* Sección 7: Propiedad Intelectual */}
              <div
                className={styles["terms-section"]}
                id="propiedad-intelectual"
              >
                <h2 className={styles["section-title"]}>
                  <span className={styles["section-number"]}>07</span>
                  Propiedad Intelectual
                </h2>

                <h3 className={styles["subsection-title"]}>
                  Diseños Originales
                </h3>
                <p>
                  Los diseños creados por Elephant Group son propiedad
                  intelectual de la empresa hasta que se complete el pago total
                  del proyecto. Una vez cancelado:
                </p>
                <ul className={styles["terms-list"]}>
                  <li>
                    El cliente adquiere derecho de uso comercial del diseño para
                    los fines especificados.
                  </li>
                  <li>
                    Elephant Group conserva derecho a usar el trabajo en
                    portafolio y material promocional.
                  </li>
                  <li>
                    El cliente no puede revender, redistribuir o licenciar los
                    diseños a terceros sin autorización.
                  </li>
                </ul>

                <h3 className={styles["subsection-title"]}>
                  Material del Cliente
                </h3>
                <p>
                  El cliente garantiza que todo material proporcionado
                  (logotipos, imágenes, textos, fotografías):
                </p>
                <ul className={styles["terms-list"]}>
                  <li>Es de su propiedad o tiene derecho legal para usarlo</li>
                  <li>No infringe derechos de autor o marcas registradas</li>
                  <li>No contiene contenido difamatorio, obsceno o ilegal</li>
                  <li>Cuenta con permisos necesarios para reproducción</li>
                </ul>

                <div
                  className={`${styles["info-box"]} ${styles["liability-box"]}`}
                >
                  <h4>⚖️ Responsabilidad Legal</h4>
                  <p>
                    El cliente se compromete a mantener indemne a Elephant Group
                    de cualquier reclamo, demanda o acción legal derivada del
                    uso de material proporcionado por el cliente que infrinja
                    derechos de terceros.
                  </p>
                </div>
              </div>

              {/* Sección 8: Garantías y Devoluciones */}
              <div className={styles["terms-section"]} id="garantias">
                <h2 className={styles["section-title"]}>
                  <span className={styles["section-number"]}>08</span>
                  Garantías y Devoluciones
                </h2>

                <h3 className={styles["subsection-title"]}>
                  ✅ Garantía de Calidad
                </h3>
                <p>Elephant Group garantiza:</p>
                <ul className={styles["terms-list"]}>
                  <li>
                    Uso de materiales de calidad según especificaciones
                    acordadas
                  </li>
                  <li>Mano de obra profesional en producción e instalación</li>
                  <li>
                    Cumplimiento de especificaciones técnicas de la cotización
                  </li>
                  <li>
                    Garantía de 6 meses en defectos de fabricación (no incluye
                    desgaste normal)
                  </li>
                </ul>

                <h3 className={styles["subsection-title"]}>
                  🔄 Política de Devoluciones
                </h3>
                <p>
                  Debido a la naturaleza personalizada de nuestros productos:
                </p>
                <ul className={styles["terms-list"]}>
                  <li>
                    <strong>No se aceptan devoluciones</strong> de productos
                    fabricados bajo especificaciones del cliente.
                  </li>
                  <li>
                    Se aceptan reclamos por defectos de fabricación dentro de 48
                    horas tras entrega.
                  </li>
                  <li>
                    Errores de producción causados por Elephant Group serán
                    corregidos sin costo.
                  </li>
                  <li>
                    Errores derivados de información incorrecta del cliente
                    generarán costos adicionales.
                  </li>
                </ul>

                <h3 className={styles["subsection-title"]}>
                  ❌ No Cubierto por Garantía
                </h3>
                <ul className={styles["terms-list"]}>
                  <li>Daños por mal uso, negligencia o accidentes</li>
                  <li>Desgaste natural por exposición a elementos</li>
                  <li>Daños causados por terceros o vandalismo</li>
                  <li>Modificaciones realizadas por personas no autorizadas</li>
                  <li>
                    Productos que no fueron instalados por personal de Elephant
                    Group
                  </li>
                </ul>
              </div>

              {/* Sección 9: Cancelaciones */}
              <div className={styles["terms-section"]} id="cancelaciones">
                <h2 className={styles["section-title"]}>
                  <span className={styles["section-number"]}>09</span>
                  Política de Cancelación
                </h2>

                <div className={styles["cancellation-rules"]}>
                  <div className={styles["cancellation-card"]}>
                    <h4>🟢 Antes de Iniciar Producción</h4>
                    <p>
                      Si el cliente cancela antes de que inicie la producción:
                    </p>
                    <ul>
                      <li>Se reembolsa el 100% del anticipo</li>
                      <li>
                        Se descuentan costos de diseño (si aplica): 10-20% del
                        anticipo
                      </li>
                    </ul>
                  </div>

                  <div className={styles["cancellation-card"]}>
                    <h4>🟡 Durante Producción (0-50%)</h4>
                    <p>Si la producción está en etapa inicial o media:</p>
                    <ul>
                      <li>Se reembolsa 50% del anticipo</li>
                      <li>Se cobran materiales ya adquiridos</li>
                      <li>Se cobran horas de trabajo invertidas</li>
                    </ul>
                  </div>

                  <div className={styles["cancellation-card"]}>
                    <h4>🔴 Producción Avanzada (+50%)</h4>
                    <p>Si la producción está en etapa final:</p>
                    <ul>
                      <li>No hay reembolso del anticipo</li>
                      <li>Cliente debe pagar saldo pendiente</li>
                      <li>Puede retirar productos fabricados</li>
                    </ul>
                  </div>
                </div>

                <p className={styles["note-text"]}>
                  La etapa de producción será evaluada por nuestro equipo
                  técnico. El cliente recibirá un informe detallado de los
                  costos incurridos en caso de cancelación.
                </p>
              </div>

              {/* Sección 10: Limitación de Responsabilidad */}
              <div className={styles["terms-section"]} id="responsabilidad">
                <h2 className={styles["section-title"]}>
                  <span className={styles["section-number"]}>10</span>
                  Limitación de Responsabilidad
                </h2>

                <p>
                  Elephant Group no será responsable por daños indirectos,
                  incidentales, especiales o consecuentes, incluyendo pero no
                  limitado a:
                </p>

                <div className={styles["liability-grid"]}>
                  <div className={styles["liability-item"]}>
                    <div className={styles["liability-icon"]}>💼</div>
                    <h4>Pérdida de Negocios</h4>
                    <p>
                      Lucro cesante, pérdida de ingresos o beneficios
                      anticipados.
                    </p>
                  </div>

                  <div className={styles["liability-item"]}>
                    <div className={styles["liability-icon"]}>📊</div>
                    <h4>Pérdida de Datos</h4>
                    <p>
                      Pérdida o corrupción de información o datos del cliente.
                    </p>
                  </div>

                  <div className={styles["liability-item"]}>
                    <div className={styles["liability-icon"]}>👥</div>
                    <h4>Daños a Terceros</h4>
                    <p>
                      Reclamos de terceros relacionados con el uso de nuestros
                      productos.
                    </p>
                  </div>

                  <div className={styles["liability-item"]}>
                    <div className={styles["liability-icon"]}>⚡</div>
                    <h4>Fuerza Mayor</h4>
                    <p>
                      Eventos fuera de nuestro control: desastres naturales,
                      pandemias, disturbios.
                    </p>
                  </div>
                </div>

                <p>
                  La responsabilidad total de Elephant Group en cualquier
                  circunstancia no excederá el monto total pagado por el cliente
                  por los servicios específicos que dieron origen al reclamo.
                </p>
              </div>

              {/* Sección 11: Ley Aplicable */}
              <div className={styles["terms-section"]} id="ley-aplicable">
                <h2 className={styles["section-title"]}>
                  <span className={styles["section-number"]}>11</span>
                  Ley Aplicable y Jurisdicción
                </h2>

                <p>
                  Estos Términos y Condiciones se rigen por las leyes de la
                  República de Chile. Cualquier controversia derivada de la
                  interpretación, aplicación o ejecución de estos términos será
                  resuelta por:
                </p>

                <div className={styles["jurisdiction-box"]}>
                  <h4>⚖️ Tribunales Competentes</h4>
                  <p>
                    Los tribunales ordinarios de justicia de la ciudad de{" "}
                    <strong>Viña del Mar, Valparaíso y V Región, Chile</strong>,
                    renunciando las partes a cualquier otro fuero o jurisdicción
                    que pudiera corresponderles.
                  </p>
                </div>

                <h3 className={styles["subsection-title"]}>
                  Resolución Alternativa de Conflictos
                </h3>
                <p>
                  Antes de iniciar acciones legales, las partes se comprometen a
                  intentar resolver controversias mediante:
                </p>
                <ul className={styles["terms-list"]}>
                  <li>Negociación directa de buena fe</li>
                  <li>Mediación voluntaria ante un tercero neutral</li>
                  <li>
                    Arbitraje según reglamento del Centro de Arbitraje y
                    Mediación de Santiago (CAM)
                  </li>
                </ul>
              </div>

              {/* Sección 12: Modificaciones */}
              <div className={styles["terms-section"]} id="modificaciones">
                <h2 className={styles["section-title"]}>
                  <span className={styles["section-number"]}>12</span>
                  Modificaciones a los Términos
                </h2>

                <p>
                  Elephant Group se reserva el derecho de modificar estos
                  Términos y Condiciones en cualquier momento. Los cambios
                  entrarán en vigor inmediatamente después de su publicación en
                  nuestro sitio web.
                </p>

                <div className={styles["modification-info"]}>
                  <h4>📢 Notificación de Cambios</h4>
                  <p>Los cambios significativos serán notificados mediante:</p>
                  <ul>
                    <li>
                      Aviso destacado en nuestro sitio web durante 30 días
                    </li>
                    <li>Correo electrónico a clientes con proyectos activos</li>
                    <li>
                      Actualización de la fecha de &quot;Última
                      actualización&quot;
                    </li>
                  </ul>
                  <p>
                    El uso continuado de nuestros servicios después de la
                    publicación de cambios constituye la aceptación de los
                    nuevos términos.
                  </p>
                </div>
              </div>

              {/* Sección 13: Contacto */}
              <div
                className={`${styles["terms-section"]} ${styles["contact-section"]}`}
                id="contacto"
              >
                <h2 className={styles["section-title"]}>
                  <span className={styles["section-number"]}>13</span>
                  Información de Contacto
                </h2>
                <p>
                  Para consultas, reclamos o información sobre estos Términos y
                  Condiciones, puedes contactarnos:
                </p>

                <div className={styles["contact-info-grid"]}>
                  <div className={styles["contact-item"]}>
                    <h4>📧 Correo Electrónico</h4>
                    <a href="mailto:contacto@elephantgroup.cl">
                      contacto@elephantgroup.cl
                    </a>
                  </div>

                  <div className={styles["contact-item"]}>
                    <h4>📱 WhatsApp</h4>
                    <a
                      href="https://wa.me/56951631370"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +56 9 5163 1370
                    </a>
                  </div>

                  <div className={styles["contact-item"]}>
                    <h4>📍 Ubicación</h4>
                    <p>
                      Valparaíso
                      <br />
                      Región de Valparaíso, Chile
                    </p>
                  </div>

                  <div className={styles["contact-item"]}>
                    <h4>🕒 Horario de Atención</h4>
                    <p>
                      Lunes a Viernes
                      <br />
                      09:00 - 18:00 hrs
                    </p>
                  </div>
                </div>

                <div className={styles["final-acceptance"]}>
                  <p>
                    <strong>
                      Al utilizar nuestros servicios, usted reconoce haber leído
                      y comprendido estos Términos y Condiciones, y acepta estar
                      legalmente obligado por los mismos.
                    </strong>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TermsContent;
