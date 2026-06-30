import React from "react";
import Image from "next/image";
import styles from "./FooterImg.module.css";

const FooterImg = () => {
  return (
    <div className={styles.footerImageInner} id="footer-image">
      <Image
        src="/assets/light/imgs/header/Banner_Contacto.webp"
        alt="Letrero publicitario de Elephant Group en Valparaíso - Imagen decorativa del pie de página"
        className={styles.footerMainImage}
        width={600}
        height={120}
        priority
      />
    </div>
  );
};

export default FooterImg;
