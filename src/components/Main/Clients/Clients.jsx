import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Parallax, EffectFade } from "swiper/modules";
import data from "@/data/Main/clients.json";
import styles from "./Clients.module.css";

const swiperOptions = {
  modules: [Navigation, Autoplay, Parallax, EffectFade],
  slidesPerView: 6,
  speed: 1600,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  loop: true,
  parallax: true,
  spaceBetween: 30,
  grabCursor: true,
  centeredSlides: false,
  navigation: {
    nextEl: ".clients-next",
    prevEl: ".clients-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },
};

function Clients() {
  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadSwiper(true);
    }, 250);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={styles.clientsSection}
      aria-labelledby="clients-heading"
      itemScope
      itemType="https://schema.org"
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Confianza y Experiencia</span>
          <h2
            id="clients-heading"
            className={styles.title}
            itemProp="description"
          >
            Empresas que <span className={styles.accent}>Confían</span> en
            Nosotros
          </h2>
          <p className={styles.description}>
            Más de{" "}
            <strong>100 empresas en Viña del Mar, Valparaíso y V Región</strong>{" "}
            han confiado en nuestros <strong>implementos publicitarios</strong>{" "}
            para potenciar su marca.
          </p>
        </div>

        <div
          className={styles.carouselWrap}
          aria-label="Empresas que confían en Elephant Group"
          itemScope
          itemType="https://schema.org"
        >
          <meta itemProp="numberOfItems" content={data.length} />

          {!loadSwiper ? (
            <div
              className={styles.loadingMinimal}
              aria-live="polite"
              aria-busy="true"
            >
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className={styles.skeletonMinimal}
                  role="presentation"
                />
              ))}
            </div>
          ) : (
            <Swiper
              {...swiperOptions}
              className={styles.carousel}
              role="region"
              aria-label="Carrusel de logos de clientes"
            >
              {data.map((item, index) => (
                <SwiperSlide
                  key={index}
                  itemScope
                  itemType="https://schema.org"
                  itemProp="itemListElement"
                >
                  <meta itemProp="position" content={index + 1} />
                  <div className={styles.logoWrap}>
                    <Image
                      src={item}
                      alt={`Logo cliente ${
                        index + 1
                      } - Empresa que confía en Elephant Group para implementos publicitarios en Valparaíso, Viña del Mar y la V Región`}
                      width={160}
                      height={100}
                      className={styles.logo}
                      loading={index < 6 ? "eager" : "lazy"}
                      quality={90}
                      sizes="(max-width: 480px) 120px, (max-width: 991px) 140px, 160px"
                      itemProp="logo"
                      title={`Logo cliente ${index + 1} Elephant Group`}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </section>
  );
}

export default Clients;
