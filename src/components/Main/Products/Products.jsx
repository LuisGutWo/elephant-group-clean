import React from "react";
import Link from "next/link";
import Image from "next/image";
import data from "@/data/Main/products.json";
import styles from "./Products.module.css";

function Products() {
  if (!data || !Array.isArray(data) || data.length === 0) {
    throw new Error("data is not defined or is empty");
  }

  // Datos enriquecidos con keywords SEO
  const enrichedData = data.map((item) => ({
    ...item,
    keywords: `${item.title.toLowerCase()}`,
    brand: "Elephant Group",
    availability: "https://schema.org",
    priceRange: item.id <= 3 ? "$15.000 - $45.000" : "$5.000 - $25.000",
  }));

  try {
    return (
      <section
        className={styles.productsSection}
        itemScope
        itemType="https://schema.org"
        aria-label="Productos publicitarios destacados"
      >
        <div className={styles.container}>
          {/* Header de sección unificado */}
          <div className={styles.header}>
            <span className={styles.eyebrow}>Bestsellers 2026</span>
            <h2 className={styles.title} itemProp="name">
              Productos <span className={styles.accentText}>Publicitarios</span>{" "}
              Más Vendidos
            </h2>
            <p className={styles.description} itemProp="description">
              <strong>Tótems</strong>, <strong>pendones roller</strong>,{" "}
              <strong>señalética personalizada</strong> y{" "}
              <strong>stickers</strong> en Viña del Mar, Valparaíso y V Región.
              Los productos más solicitados por empresas para promoción y
              branding efectivo.
            </p>
            <meta
              itemProp="numberOfItems"
              content={String(enrichedData.length)}
            />
          </div>

          {/* Grid de productos optimizado */}
          <div className={styles.productsGrid}>
            {enrichedData.map((item, idx) => (
              <article
                key={item.id}
                className={styles.productCard}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org"
              >
                <div className={styles.imageWrap}>
                  <Image
                    src={item.image}
                    alt={`${item.title}${
                      item.subtitle ? " - " + item.subtitle : ""
                    } | Elephant Group Valparaíso, Viña del Mar, V Región`}
                    width={400}
                    height={300}
                    className={styles.image}
                    itemProp="image"
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 600px) 100vw, 400px"
                    priority={idx < 3}
                  />
                  <span
                    className={styles.badge}
                    aria-label={`Producto destacado: ${item.title}`}
                  >
                    {item.number}
                  </span>
                </div>

                <div className={styles.content}>
                  <h3 className={styles.productTitle} itemProp="name">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <span
                      className={styles.productSubtitle}
                      itemProp="description"
                    >
                      {item.subtitle}
                    </span>
                  )}
                  <div className={styles.meta}>
                    <meta itemProp="priceCurrency" content="CLP" />
                  </div>
                  <div className={styles.actions}>
                    <Link
                      href="/quote"
                      className={`${styles.btn} ${styles.btnPrimary}`}
                      aria-label={`Solicitar cotización de ${item.title}`}
                      title={`Cotizar ${item.title}`}
                    >
                      Cotizar
                    </Link>
                    <Link
                      href="/portfolio"
                      className={`${styles.btn} ${styles.btnSecondary}`}
                      aria-label={`Ver más productos similares a ${item.title}`}
                      title="Ver catálogo completo de productos"
                    >
                      Ver más
                    </Link>
                  </div>

                  {/* SEO meta ocultos */}
                  <div className={styles.hiddenMeta}>
                    <span
                      itemProp="brand"
                      itemScope
                      itemType="https://schema.org"
                    >
                      <span itemProp="name">{item.brand}</span>
                    </span>
                    <div
                      itemProp="offers"
                      itemScope
                      itemType="https://schema.org"
                    >
                      <span itemProp="priceCurrency" content="CLP">
                        CLP
                      </span>
                      <span
                        itemProp="price"
                        content={item.priceRange.match(/\d+/)?.[0]}
                      >
                        {item.priceRange}
                      </span>
                      <link itemProp="availability" href={item.availability} />
                    </div>
                    <meta itemProp="sku" content={`EG-PROD-${item.id}`} />
                    <meta
                      itemProp="category"
                      content="Implementos Publicitarios"
                    />
                    <meta itemProp="keywords" content={item.keywords} />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Call to action optimizado */}
          <div className={styles.ctaWrapper}>
            <div className={styles.modernCta}>
              <p className={styles.ctaText}>
                ¿Necesitas <strong>gigantografías</strong>,{" "}
                <strong>lienzos</strong> o{" "}
                <strong>displays personalizados</strong>?
              </p>
              <Link
                href="/quote"
                className={styles.btnCtaModern}
                aria-label="Solicitar cotización personalizada de productos publicitarios"
                title="Cotización gratuita en 24 horas - Elephant Group"
              >
                <span>Solicitar Cotización Gratuita</span>
                <div className={styles.btnGlow}></div>
              </Link>
              <p className={styles.ctaHelperText}>
                Respuesta en <strong>24 horas</strong> • Envío a toda la{" "}
                <strong>Región de Valparaíso</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error(error);
    return (
      <div className={styles.errorContainer}>
        <h3>Error al cargar productos</h3>
        <p>Por favor, inténtalo nuevamente.</p>
      </div>
    );
  }
}

export default Products;
