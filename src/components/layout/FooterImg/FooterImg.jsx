import React from "react";
import Image from "next/image";
import styles from "./FooterImg.module.css";

const FooterImg = () => {
  return (
    <div className={styles.footerImageInner} id="footer-image">
      <Image
        src="/images/header/Banner_Contacto.webp"
        alt="Letrero publicitario de Elephant Group en Valparaíso - Imagen decorativa del pie de página"
        className={styles.footerMainImage}
        fill
        sizes="100vw"
        priority
      />
    </div>
  );
};

export default FooterImg;
