import React, { useEffect, useState } from "react";
import Image from "next/image";

//= Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, EffectFade } from "swiper/modules";

import data from "@/data/Main/portfolioGalleryPage.json";
import styles from "./Story.module.css";

const swiperOptions = {
  modules: [Navigation, Autoplay, Pagination, EffectFade],
  effect: "fade",
  speed: 1500,
  autoplay: {
    delay: 3000,
  },
  loop: true,
  onResize: function (swiper) {
    swiper.update();
  },
  pagination: {
    el: ".slider-prlx .swiper-pagination",
    type: "fraction",
    clickable: true,
  },
  navigation: {
    nextEl: ".slider-prlx .next-ctrl",
    prevEl: ".slider-prlx .prev-ctrl",
  },
};

function Story() {
  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.mediaColSmall}>
            {loadSwiper && (
              <Swiper {...swiperOptions} className={styles.slider}>
                {[0, 1, 4, 5, 6, 2, 3].map((i) => (
                  <SwiperSlide key={i}>
                    <div
                      className={`${styles.slideFrame} ${styles.slideFrameSmall}`}
                    >
                      <Image
                        src={data.gallery[i].image}
                        alt={`Proyecto ${data.gallery[i].type} ${data.gallery[i].year}`}
                        fill
                        className={styles.slideImage}
                        sizes="(max-width: 991px) 100vw, 400px"
                        priority={i === 0}
                        loading={i === 0 ? "eager" : "lazy"}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
          <div className={styles.mediaColWide}>
            {loadSwiper && (
              <Swiper {...swiperOptions} className={styles.slider}>
                {[2, 3, 0, 1, 4, 5, 6].map((i) => (
                  <SwiperSlide key={i}>
                    <div
                      className={`${styles.slideFrame} ${styles.slideFrameWide}`}
                    >
                      <Image
                        src={data.gallery[i].image}
                        alt={`Proyecto ${data.gallery[i].type} ${data.gallery[i].year}`}
                        fill
                        className={styles.slideImage}
                        sizes="(max-width: 991px) 100vw, 800px"
                        priority={i === 2}
                        loading={i === 2 ? "eager" : "lazy"}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
          <div className={styles.headingCol}>
            <div className={styles.secHead}>
              <h2 className={styles.subTitle}>Nuestra Historia</h2>
            </div>
          </div>
          <div className={styles.contentCol}>
            <div className={styles.content}>
              <h3 className={styles.storyHeadline}>
                Desde 2018 transformando marcas en la V Región
              </h3>
              <p className={styles.storyText}>
                <strong>Elephant Group</strong> nació en 2018 en Viña del Mar
                con una visión clara:
                <strong> revolucionar la publicidad en la región</strong>. Lo
                que comenzó como un pequeño taller de impresión se ha convertido
                en un referente de{" "}
                <strong>
                  implementos publicitarios e identidad corporativa
                </strong>
                .
              </p>
              <p className={styles.storyText}>
                En 6 años hemos producido más de{" "}
                <strong>500 proyectos exitosos</strong>, desde señalética
                corporativa hasta campañas de marketing visual completas.
                Trabajamos con empresas de todos los tamaños, ayudándolas a{" "}
                <strong>destacar en su mercado</strong> con soluciones creativas
                y productos de alta calidad.
              </p>
              <p className={styles.storyText}>
                Nuestra fortaleza está en combinar{" "}
                <strong>diseño innovador, producción local</strong> y un
                servicio personalizado que entiende las necesidades reales de
                cada negocio en Valparaíso y la región.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
