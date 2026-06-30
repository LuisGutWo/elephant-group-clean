import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, Parallax } from "swiper/modules";
import StatementSplitter from "../Common/StatementSplitter";
import data from "@/data/Main/header.json";
import { arrowRightUpSvg } from "@/data/Main/icons";
import styles from "./Header.module.css";

const swiperOptions = {
  modules: [Navigation, Autoplay, Pagination, Parallax],
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
    waitForTransition: true,
  },
  effect: "fade",
  speed: 1500,
  parallax: true,
  loop: true,
  onSwiper: function (swiper) {
    if (swiper && swiper.slides) {
      for (let i = 0; i < swiper.slides.length; i++) {
        const slide = swiper.slides[i];
        const bgImg = slide.querySelector(`.${styles.bgImg}`);
        if (bgImg) {
          bgImg.setAttribute("data-swiper-parallax", 0.75 * swiper.width);
        }
      }
    }
  },
  onResize: function (swiper) {
    swiper.update();
  },
  pagination: {
    el: `.${styles.sliderPrlx} .swiper-pagination`,
    type: "fraction",
    clickable: true,
  },
  navigation: {
    nextEl: `.${styles.nextCtrl}`,
    prevEl: `.${styles.prevCtrl}`,
  },
};

function Header() {
  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  return (
    <header
      className={styles.sliderPrlx}
      itemScope
      itemType="https://schema.org"
      role="banner"
      aria-label="Banner principal - Elephant Group implementos publicitarios"
    >
      {loadSwiper && data && (
        <Swiper
          {...swiperOptions}
          className={styles.parallaxSlider}
          role="region"
          aria-label="Carrusel de servicios destacados"
        >
          {data.map((item, index) => (
            <SwiperSlide key={item.id}>
              <div
                className={styles.slideInner}
                itemScope
                itemType="https://schema.org"
              >
                {/* Imagen de fondo optimizada */}
                <div className={styles.bgImg}>
                  <Image
                    src={item.background}
                    alt={`Elephant Group - ${item.title} - Implementos publicitarios y señalética en Valparaíso, V Región Chile`}
                    fill
                    sizes="100vw"
                    priority={index === 0}
                    style={{ objectFit: "cover" }}
                    data-swiper-parallax="0.3"
                    title={`${item.title} - Elephant Group`}
                  />
                  <meta itemProp="description" content={item.subtitle} />
                </div>

                {/* Contenedor principal semántico */}
                <div
                  className={styles.container}
                  itemScope
                  itemType="https://schema.org"
                >
                  <div className={styles.contentGrid}>
                    <div className={styles.captionGlass}>
                      <div className={styles.captionContent}>
                        <span className={styles.eyebrow} itemProp="description">
                          <StatementSplitter statement={item.subtitle || ""} />
                        </span>
                        <meta itemProp="provider" content="Elephant Group" />
                        <meta
                          itemProp="serviceType"
                          content="Implementos Publicitarios"
                        />
                        <meta
                          itemProp="areaServed"
                          content="Valparaíso, Chile"
                        />
                      </div>
                    </div>

                    {/* Botón de llamada a la acción */}
                    <div
                      className={styles.captionButtonContainer}
                      itemScope
                      itemType="https://schema.org"
                    >
                      <Link
                        className={styles.navLink}
                        href="/contact"
                        aria-label="Contactar con asesor de Elephant Group para implementos publicitarios"
                        title="Habla con un asesor experto en publicidad"
                        itemProp="url"
                      >
                        <button
                          className={styles.topNavbarButton}
                          type="button"
                        >
                          <span className={styles.rollingText}>
                            HABLA CON UN ASESOR {arrowRightUpSvg}
                          </span>
                        </button>
                      </Link>
                      <meta itemProp="contactType" content="customer service" />
                      <meta itemProp="availableLanguage" content="Spanish" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Controles de navegación nativos */}
      <div
        className={styles.setting}
        role="group"
        aria-label="Controles del carrusel"
      >
        <div className={styles.controls}>
          <button
            className={`${styles.navCtrl} ${styles.prevCtrl}`}
            aria-label="Servicio anterior"
            type="button"
          >
            <span className={styles.arrowLeftIcon}></span>
          </button>
          <button
            className={`${styles.navCtrl} ${styles.nextCtrl}`}
            aria-label="Siguiente servicio"
            type="button"
          >
            <span className={styles.arrowRightIcon}></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
