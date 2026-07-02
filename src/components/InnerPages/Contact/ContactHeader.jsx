import styles from "./ContactHeader.module.css";

export default function ContactHeader() {
  return (
    <header
      className={styles.header}
      itemScope
      itemType="https://schema.org/WPHeader"
    >
      <div
        className={styles.backgroundImg}
        style={{
          backgroundImage: "url(/images/header/banner-senaleticas.webp)",
        }}
        aria-hidden="true"
      />
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.captionCol}>
            <p className={styles.eyebrow} itemProp="about">
              Página de Contacto
            </p>
            <h1 className={styles.title} itemProp="headline" tabIndex={0}>
              Ponte en contacto con nosotros
            </h1>
          </div>
          <div className={styles.descriptionCol}>
            <p className={styles.description} itemProp="description">
              <strong>¿Tienes un proyecto en mente?</strong> Completa el
              formulario o escríbenos por WhatsApp al{" "}
              <strong>+56 9 9323 9203</strong>. Te responderemos en menos de 24
              horas con una propuesta personalizada para tu empresa en la V
              Región.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
