import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Portfolio.module.css";

const portfolioData = [
  {
    id: 1,
    title: "LETREROS",
    subtitle: "publicitarios y corporativos",
    description: "Para destacar tu negocio y atraer clientes.",
    image: "/assets/light/imgs/works/corte_el_brioche.webp",
    category: "Letreros",
    keywords:
      "letreros publicitarios, letreros corporativos, señalización comercial Viña del Mar, Valparaiso y V Region",
    priceRange: "Desde $25.000",
    brand: "Elephant Group",
  },
  {
    id: 2,
    title: "SEÑALÉTICAS",
    subtitle: "industriales",
    description: "Cumple normativa y mejora la seguridad.",
    image: "/assets/light/imgs/works/letrero_covisa.webp",
    category: "Señaléticas",
    keywords:
      "señalética industrial, señalización de seguridad, letreros corporativos Viña del Mar, Valparaiso y V Region",
    priceRange: "Desde $18.000",
    brand: "Elephant Group",
  },
  {
    id: 3,
    title: "ADHESIVOS",
    subtitle: "personalizados",
    description: "Refuerza tu marca en cada espacio.",
    image: "/assets/light/imgs/works/Adhesivos-Personalizarme.webp",
    category: "Adhesivos",
    keywords:
      "adhesivos personalizados, vinilos publicitarios, etiquetas corporativas Viña del Mar, Valparaiso y V Region",
    priceRange: "Desde $8.000",
    brand: "Elephant Group",
  },
];

function Portfolio() {
  const currentYear = new Date().getFullYear();

  const handleImageClick = (imageUrl) => {
    window.open(imageUrl, "_blank", "noopener noreferrer");
  };

  return (
    <section
      className={styles.portfolioSection}
      itemScope
      itemType="https://schema.org"
      aria-label="Catálogo de implementos publicitarios"
    >
      {/* Schema.org Organization Data */}
      <div
        itemScope
        itemType="https://schema.org"
        className={styles.hiddenMeta}
      >
        <span itemProp="name">Elephant Group</span>
        <span itemProp="description">
          Fabricación de implementos publicitarios en Viña del Mar, Valparaiso y
          V Region
        </span>
        <span itemProp="telephone">+56951631370</span>
        <span itemProp="areaServed">Viña del Mar, Valparaiso y V Region</span>
        <div itemProp="address" itemScope itemType="https://schema.org">
          <span itemProp="addressLocality">
            Viña del Mar, Valparaiso y V Region
          </span>
          <span itemProp="addressRegion">
            Viña del Mar, Valparaiso y V Region
          </span>
          <span itemProp="addressCountry">CL</span>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.portfolioHeader}>
          <h2 className={styles.sectionTitle} itemProp="name">
            Nuestros Productos
          </h2>
          <meta
            itemProp="numberOfItems"
            content={String(portfolioData.length)}
          />
        </div>

        {/* Grid de Portafolio Nativo */}
        <div className={styles.portfolioGrid}>
          {portfolioData.map((item, index) => (
            <div
              key={item.id}
              className={styles.gridItem}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org"
            >
              <div className={styles.portfolioCard}>
                <div className={styles.portfolioImage}>
                  <Image
                    src={item.image}
                    alt={`${item.title} - ${item.subtitle} | Elephant Group Valparaíso`}
                    width={400}
                    height={300}
                    style={{ objectFit: "cover" }}
                    onClick={() => handleImageClick(item.image)}
                    itemProp="image"
                    role="button"
                    tabIndex="0"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        handleImageClick(item.image);
                      }
                    }}
                    aria-label={`Ver imagen ampliada de ${item.title}`}
                  />
                  <div className={styles.portfolioOverlay}>
                    <div
                      className={styles.portfolioCategory}
                      itemProp="category"
                    >
                      {item.category}
                    </div>
                  </div>
                </div>

                <div className={styles.portfolioContent}>
                  <div className={styles.headerBadge}>
                    <h3 className={styles.cardTitle} itemProp="name">
                      {item.title}
                    </h3>
                  </div>

                  <p className={styles.cardDescription} itemProp="description">
                    {item.description}
                  </p>

                  {/* Schema.org adicional */}
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
                        itemProp="lowPrice"
                        content={item.priceRange.match(/\d+/)?.[0]}
                      >
                        {item.priceRange}
                      </span>
                      <span
                        itemProp="availability"
                        content="https://schema.org"
                      >
                        En Stock
                      </span>
                      <span
                        itemProp="priceValidUntil"
                        content={`${currentYear}-12-31`}
                      >
                        {currentYear}
                      </span>
                    </div>
                    <div
                      itemProp="aggregateRating"
                      itemScope
                      itemType="https://schema.org"
                    >
                      <span itemProp="ratingValue">4.8</span>
                      <span itemProp="bestRating">5</span>
                      <span itemProp="ratingCount">127</span>
                    </div>
                    <meta
                      itemProp="sku"
                      content={`EG-${item.category.toUpperCase()}-${item.id}`}
                    />
                    <meta itemProp="keywords" content={item.keywords} />
                  </div>

                  <div className={styles.portfolioActions}>
                    <Link
                      href="/portfolio"
                      className={styles.portfolioBtn}
                      aria-label={`Ver catálogo completo de ${item.title.toLowerCase()} en Viña del Mar, Valparaiso y V Region`}
                      title={`${item.priceRange} - ${item.title} ${item.subtitle} en Viña del Mar, Valparaiso y V Region`}
                    >
                      Ver Catálogo
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M7 17L17 7M17 7H7M17 7V17"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
                <meta itemProp="position" content={String(index + 1)} />
              </div>
            </div>
          ))}
        </div>

        {/* Breadcrumb Schema.org */}
        <div
          itemScope
          itemType="https://schema.org"
          className={styles.hiddenMeta}
        >
          <div
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org"
          >
            <Link itemProp="item" href="/">
              <span itemProp="name">Inicio</span>
            </Link>
            <meta itemProp="position" content="1" />
          </div>
          <div
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org"
          >
            <Link itemProp="item" href="/portfolio">
              <span itemProp="name">Portafolio</span>
            </Link>
            <meta itemProp="position" content="2" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
