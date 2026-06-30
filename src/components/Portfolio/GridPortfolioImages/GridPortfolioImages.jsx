import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import data from "@/data/Main/portfolioGalleryPage.json";
import styles from "./GridPortfolioImages.module.css";

function GridPortfolioImages() {
  const [activeFilter, setActiveFilter] = useState("*");
  const [filteredItems, setFilteredItems] = useState(data?.gallery || []);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const modalCloseRef = useRef(null);
  const catalogoPDF = "/catalogo_impresion.pdf";

  const handleImageClick = (item) => {
    setSelectedProject(item);
    setShowModal(true);
    document.body.style.overflow = "hidden";

    // Selector adaptado a la nueva arquitectura modular libre de Bootstrap
    const navbar = document.querySelector("[class*='MainNavbar_navbar']");
    if (navbar) {
      navbar.style.position = "relative";
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
    document.body.style.overflow = "auto";

    const navbar = document.querySelector("[class*='MainNavbar_navbar']");
    if (navbar) {
      navbar.style.position = "";
    }
  };

  const filterItems = (filterValue) => {
    setActiveFilter(filterValue);
    if (filterValue === "*") {
      setFilteredItems(data?.gallery || []);
    } else {
      const filtered = data?.gallery?.filter((item) =>
        item.filter.includes(filterValue.replace(".", "")),
      );
      setFilteredItems(filtered);
    }
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (showModal && modalCloseRef.current) {
      modalCloseRef.current.focus();
    }
  }, [showModal]);

  return (
    <section
      className={styles.portfolioGallerySection}
      itemScope
      itemType="https://schema.org"
      aria-label="Galería de proyectos publicitarios"
    >
      {/* Filtros de categoría */}
      <div className={styles.filterBar}>
        <div className={styles.containerFilter}>
          <nav
            className={styles.filterButtons}
            role="navigation"
            aria-label="Filtros de categoría"
          >
            {data?.filters?.map((item) => (
              <button
                key={item?.id}
                onClick={() => filterItems(item?.filter)}
                className={`${styles.filterBtn} ${
                  activeFilter === item?.filter ? styles.active : ""
                }`}
                aria-label={`Filtrar por ${item?.title}`}
                aria-pressed={activeFilter === item?.filter}
              >
                {item?.title}
                {item?.count && (
                  <span className={styles.count}>{item?.count}</span>
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Grid de imágenes Masonry encapsulado */}
      <div className={styles.galleryContainer}>
        <div
          className={`${styles.masonryGrid} ${isLoaded ? styles.loaded : ""}`}
        >
          {filteredItems.length > 0 ? (
            filteredItems.map((item, idx) => (
              <div
                key={item?.id}
                className={styles.galleryItem}
                style={{ animationDelay: `${idx * 0.05}s` }}
                itemProp="image"
                itemScope
                itemType="https://schema.org"
              >
                <button
                  className={styles.itemImageWrapper}
                  onClick={() => handleImageClick(item)}
                  aria-label={`Ver opciones para ${item?.type} ${item?.year}`}
                  type="button"
                >
                  <div className={styles.imageContainer}>
                    <Image
                      src={item?.image}
                      alt={`${item?.type} ${item?.year} - Proyecto publicitario Elephant Group Valparaíso y Viña del Mar`}
                      className={styles.itemImage}
                      itemProp="contentUrl"
                      loading="lazy"
                      width={500}
                      height={380}
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </div>

                  <meta
                    itemProp="name"
                    content={`${item?.type} ${item?.year}`}
                  />
                  <meta
                    itemProp="description"
                    content={`Proyecto de ${item?.type} realizado en ${item?.year} por Elephant Group en la Región de Valparaíso`}
                  />
                  <meta
                    itemProp="datePublished"
                    content={`${item?.year}-01-01`}
                  />
                  <meta itemProp="creator" content="Elephant Group" />
                  <meta itemProp="copyrightHolder" content="Elephant Group" />

                  <div className={styles.projectBadge}>
                    <span className={styles.badgeType}>{item?.type}</span>
                    <span className={styles.badgeYear}>{item?.year}</span>
                  </div>

                  <div className={styles.clickOverlay}>
                    <div className={styles.clickIcon}>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        width="36"
                        height="36"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 8v8M8 12h8" />
                      </svg>
                      <span className={styles.clickText}>Ver Opciones</span>
                    </div>
                  </div>
                </button>
              </div>
            ))
          ) : (
            <div className={styles.noResults}>
              <p>No se encontraron proyectos en esta categoría.</p>
            </div>
          )}
        </div>
      </div>

      {/* Modal de Acciones Accesible Nativo */}
      {showModal && selectedProject && (
        <div
          className={styles.modalBackdrop}
          onClick={handleCloseModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <div className={styles.modalTitleSection}>
                <h2 id="modal-title" className={styles.modalTitle}>
                  {selectedProject.type}
                </h2>
                <span className={styles.modalYear}>{selectedProject.year}</span>
              </div>
              <button
                ref={modalCloseRef}
                className={styles.modalClose}
                onClick={handleCloseModal}
                aria-label="Cerrar modal de proyecto"
                type="button"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="24"
                  height="24"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className={styles.modalImagePreview}>
              <Image
                src={selectedProject.image}
                alt={`Vista ampliada del proyecto ${selectedProject.type} realizado en ${selectedProject.year} por Elephant Group`}
                className={styles.modalPreviewImg}
                width={600}
                height={450}
                style={{ objectFit: "cover", width: "100%", height: "auto" }}
              />
            </div>

            <div className={styles.modalDescription}>
              <p>
                Proyecto de {selectedProject.type} realizado en{" "}
                {selectedProject.year} por Elephant Group en la Región de
                Valparaíso.
              </p>
            </div>

            <div className={styles.modalActions}>
              <Link
                href={catalogoPDF}
                className={`${styles.modalBtn} ${styles.modalBtnCatalog}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Catálogo PDF
              </Link>

              <Link
                href="/contact"
                className={`${styles.modalBtn} ${styles.modalBtnQuote}`}
                onClick={handleCloseModal}
              >
                Solicitar Presupuesto
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default GridPortfolioImages;
