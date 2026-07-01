import React, { useEffect, useState } from "react";
import Image from "next/image";
import articlesData from "@/data/Main/blog-articles.json";
import styles from "./BlogGrid.module.css";

function BlogGrid() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [currentPage, setCurrentPage] = useState(1);
  const [loadedImages, setLoadedImages] = useState({});
  const articlesPerPage = 6;

  // Mapeo corregido a las rutas modernas de activos visuales
  const getCategoryImage = (category) => {
    const imageMap = {
      "Diseño Gráfico": "/images/works/diseno_servicestab.webp",
      Señalética: "/images/works/letrero_restaurante.webp",
      Marketing: "/images/works/publicidad_tela_pvc_1.webp",
      Impresión: "/images/works/impresion_image_covisa.webp",
      Branding: "/images/works/cafeteria_violeta.webp",
      Publicidad: "/images/works/letreros_varios.webp",
      Packaging: "/images/works/corte_casa_colibri.webp",
      Merchandising: "/images/works/grafica_adehesiva_cooler.webp",
    };
    return imageMap[category] || "/images/works/letreros_muestra_varios.webp";
  };

  const filteredArticles =
    selectedCategory === "Todos"
      ? articlesData.articles
      : articlesData.articles.filter(
          (article) => article.category === selectedCategory,
        );

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle,
  );
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    setLoadedImages({});
  }, [selectedCategory, currentPage]);

  return (
    <section
      className={styles.blogGridSection}
      itemScope
      itemType="https://schema.org"
      aria-label="Artículos del blog corporativo"
    >
      <div className={styles.container}>
        {/* Barra de Filtros */}
        <div className={styles.categoryFilters}>
          <div className={styles.filtersWrapper}>
            {articlesData.categories.map((category, index) => (
              <button
                key={index}
                className={`${styles.filterBtn} ${
                  selectedCategory === category ? styles.active : ""
                }`}
                onClick={() => handleCategoryChange(category)}
                aria-label={`Filtrar por ${category}`}
                aria-pressed={selectedCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Rejilla de Artículos */}
        <div className={styles.articlesGrid}>
          {currentArticles.map((article) => (
            <article
              key={article.id}
              className={styles.articleCard}
              itemScope
              itemType="https://schema.orgPosting"
            >
              <div className={styles.articleImage}>
                {!loadedImages[article.id] && (
                  <div className={styles.skeleton} aria-hidden="true" />
                )}
                <Image
                  src={getCategoryImage(article.category)}
                  alt={`${article.category} - ${article.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{
                    objectFit: "cover",
                    transition: "opacity 0.3s ease",
                  }}
                  className={
                    loadedImages[article.id]
                      ? styles.imageReady
                      : styles.imageHidden
                  }
                  onLoad={() =>
                    setLoadedImages((prev) => ({ ...prev, [article.id]: true }))
                  }
                />
                <div className={styles.imageOverlay}></div>
                <div className={styles.categoryBadge}>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    aria-hidden="true"
                  >
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82zM7 7h.01" />
                  </svg>
                  <span itemProp="articleSection">{article.category}</span>
                </div>
              </div>

              <div className={styles.articleContent}>
                <div className={styles.articleMeta}>
                  <span className={styles.date} itemProp="datePublished">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      aria-hidden="true"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    {new Date(article.date).toLocaleDateString("es-ES", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className={styles.source}>
                    Fuente: {article.source}
                  </span>
                </div>

                <h3 className={styles.articleTitle} itemProp="headline">
                  {article.title}
                </h3>

                <p className={styles.articleExcerpt} itemProp="description">
                  {article.excerpt}
                </p>

                <a
                  href={article.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.readMoreBtn}
                  aria-label={`Leer más sobre ${article.title}`}
                  itemProp="url"
                >
                  Leer Artículo Completo
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    aria-hidden="true"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </a>
              </div>

              <div className={styles.hiddenMeta}>
                <span itemProp="author" itemScope itemType="https://schema.org">
                  <span itemProp="name">{article.source}</span>
                </span>
                <meta itemProp="dateModified" content={article.date} />
              </div>
            </article>
          ))}
        </div>

        {/* Paginación Nativa */}
        {totalPages > 1 && (
          <nav
            className={styles.pagination}
            role="navigation"
            aria-label="Navegación de páginas"
          >
            <button
              className={styles.paginationBtn}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Página anterior"
            >
              ← Anterior
            </button>

            <div className={styles.paginationNumbers}>
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  className={`${styles.pageNumber} ${
                    currentPage === index + 1 ? styles.pageNumberActive : ""
                  }`}
                  onClick={() => handlePageChange(index + 1)}
                  aria-label={`Ir a página ${index + 1}`}
                  aria-current={currentPage === index + 1 ? "page" : undefined}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <button
              className={styles.paginationBtn}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Página siguiente"
            >
              Siguiente →
            </button>
          </nav>
        )}
      </div>
    </section>
  );
}

export default BlogGrid;
