import React, { useEffect, useState, useRef } from "react";
import NextImage from "next/image";
import gsap from "gsap";
import styles from "./Loader.module.css";

function Loader() {
  const [logoSrc, setLogoSrc] = useState("/assets/light/imgs/logo-eg-new.webp");

  // Referencias mutables para evitar consultas nativas al DOM
  const loaderWrapRef = useRef(null);
  const loaderLogoRef = useRef(null);
  const loaderProgressRef = useRef(null);

  useEffect(() => {
    let tl = null;

    try {
      if (loaderWrapRef.current) {
        gsap.set(loaderWrapRef.current, { zIndex: 99999, opacity: 1 });
      }
      if (loaderLogoRef.current) {
        gsap.set(loaderLogoRef.current, {
          scale: 0.3,
          opacity: 0,
          rotation: -10,
        });
      }
      if (loaderProgressRef.current) {
        gsap.set(loaderProgressRef.current, { width: 0 });
      }

      if (loaderWrapRef.current && loaderLogoRef.current) {
        tl = gsap.timeline();

        tl.to(loaderLogoRef.current, {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 0.8,
          ease: "elastic.out(1, 0.5)",
          delay: 0.2,
        });

        if (loaderProgressRef.current) {
          tl.to(
            loaderProgressRef.current,
            {
              width: "100%",
              duration: 1.0,
              ease: "power2.out",
            },
            "-=0.1",
          );
        }

        tl.to(loaderLogoRef.current, {
          scale: 1.05,
          duration: 0.15,
          yoyo: true,
          repeat: 1,
          ease: "power2.inOut",
        });

        tl.to(loaderWrapRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
          delay: 0.3,
        }).to(loaderWrapRef.current, {
          display: "none",
          zIndex: -1,
        });

        // Animación de entrada pasiva para el header del layout principal
        const headerEl = document.querySelector("header");
        if (headerEl) {
          tl.from(
            headerEl,
            {
              y: -30,
              opacity: 0,
              duration: 0.6,
              ease: "power3.out",
            },
            "-=0.4",
          );
        }
      }
    } catch (error) {
      console.error("Error in Loader component animations:", error);
      setTimeout(() => {
        if (loaderWrapRef.current) {
          gsap.to(loaderWrapRef.current, {
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
            onComplete: () => {
              if (loaderWrapRef.current)
                loaderWrapRef.current.style.display = "none";
            },
          });
        }
      }, 2000);
    }

    return () => {
      if (tl) tl.kill();
    };
  }, []);

  useEffect(() => {
    const img = new window.Image();
    img.src = logoSrc;
    img.onerror = () => {
      console.warn(
        "Error loading logo asset, falling back to default light logo.",
      );
      setLogoSrc("/assets/light/imgs/logo-eg-new.webp");
    };

    return () => {
      img.onerror = null;
    };
  }, [logoSrc]);

  return (
    <div
      ref={loaderWrapRef}
      className={styles.loaderWrap}
      role="alert"
      aria-busy="true"
      aria-label="Cargando sitio web"
    >
      <div className={styles.loaderOverlay}></div>
      <div className={styles.loaderContent}>
        <div ref={loaderLogoRef} className={styles.loaderLogo}>
          <NextImage
            src={logoSrc}
            alt="Logo animado de Elephant Group - Servicios gráficos en Valparaíso"
            width={180}
            height={60}
            priority
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className={styles.loaderProgressContainer}>
          <div ref={loaderProgressRef} className={styles.loaderProgress}></div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
