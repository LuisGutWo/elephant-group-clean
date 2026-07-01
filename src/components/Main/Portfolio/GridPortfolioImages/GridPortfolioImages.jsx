import { useState, useCallback } from "react";
import Image from "next/image";
import data from "@/data/Main/portfolioGalleryPage.json";
import styles from "./GridPortfolioImages.module.css";

export default function GridPortfolioImages() {
  const [activeFilter, setActiveFilter] = useState("*");
  const [lightbox, setLightbox] = useState(null); // { image, type, year }

  const filtered =
    activeFilter === "*"
      ? data.gallery
      : data.gallery.filter((item) => item.filter === activeFilter);

  const openLightbox = useCallback((item) => {
    setLightbox(item);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
    document.body.style.overflow = "";
  }, []);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") closeLightbox();
    },
    [closeLightbox],
  );

  // Normaliza el filtro — el JSON usa "cortes", "diseño", "impresion"
  // pero los filters del JSON usan ".cortes", ".diseño", ".impresion"
  const normalizeFilter = (filter) => filter.replace(".", "");

  return (
    <section className={styles.section} aria-label="Galería de trabajos">
      {/* Filtros */}
      <div className={styles.filtersWrap}>
        <div
          className={styles.filters}
          role="group"
          aria-label="Filtrar trabajos por categoría"
        >
          {data.filters.map((f) => {
            const isActive =
              activeFilter === f.filter ||
              (f.filter === "*" && activeFilter === "*");
            return (
              <button
                key={f.id}
                className={`${styles.filterBtn} ${
                  isActive ? styles.filterActive : ""
                }`}
                onClick={() => setActiveFilter(f.filter)}
                aria-pressed={isActive}
                aria-label={`Filtrar por ${f.title}`}
              >
                {f.title}
                <span className={styles.filterCount} aria-hidden="true">
                  {filtered.length}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid */}
      <div className={styles.container}>
        <div className={styles.grid}>
          {filtered.map((item) => (
            <div
              key={item.id}
              className={styles.gridItem}
              itemScope
              itemType="https://schema.org/ImageObject"
            >
              <button
                className={styles.imageBtn}
                onClick={() => openLightbox(item)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") openLightbox(item);
                }}
                aria-label={`Ver ${item.type} - ${item.year}`}
              >
                <div className={styles.imageWrap}>
                  <Image
                    src={item.image}
                    alt={`${item.type} realizado por Elephant Group en ${item.year} - Valparaíso, Chile`}
                    fill
                    sizes="(max-width: 576px) 100vw, (max-width: 991px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                    loading="lazy"
                    itemProp="contentUrl"
                  />
                  <div className={styles.overlay}>
                    <span className={styles.overlayType}>{item.type}</span>
                    <span className={styles.overlayYear}>{item.year}</span>
                    <span className={styles.overlayIcon} aria-hidden="true">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                      </svg>
                    </span>
                  </div>
                </div>
                <meta
                  itemProp="description"
                  content={`${item.type} - ${item.year}`}
                />
              </button>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className={styles.empty}>No hay trabajos en esta categoría.</p>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className={styles.lightboxOverlay}
          role="dialog"
          aria-modal="true"
          aria-label={`Imagen ampliada: ${lightbox.type}`}
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
        >
          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.lightboxClose}
              onClick={closeLightbox}
              aria-label="Cerrar imagen"
              autoFocus
            >
              ×
            </button>
            <div className={styles.lightboxImageWrap}>
              <Image
                src={lightbox.image}
                alt={`${lightbox.type} - ${lightbox.year}`}
                fill
                sizes="90vw"
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
            <div className={styles.lightboxMeta}>
              <span className={styles.lightboxType}>{lightbox.type}</span>
              <span className={styles.lightboxYear}>{lightbox.year}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
