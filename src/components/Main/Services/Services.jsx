import Image from "next/image";
import Link from "next/link";
import data from "@/data/Main/services.json";
import styles from "./Services.module.css";

const serviceRouteById = {
  1: "/services/adhesivos",
  2: "/services/letreros",
  3: "/services/diseno",
};

function Services() {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Servicios Destacados</span>
          <h2 className={styles.title}>Soluciones Publicitarias Integrales</h2>
          <p className={styles.description}>
            Diseño, fabricación e instalación de implementos publicitarios,
            señalética, letreros y material POP para empresas en Viña del Mar,
            Valparaíso y V Región. Servicio profesional y personalizado.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {data.map((item) => (
            <div className={styles.gridItem} key={item.id}>
              <Link
                href={serviceRouteById[item.id] || "/quote"}
                className={styles.serviceLink}
              >
                <div className={styles.iconWrap}>
                  <Image
                    src={item.image}
                    alt={`Icono de ${item.title} - Elephant Group`}
                    className={styles.iconImage}
                    width={100}
                    height={100}
                    loading="lazy"
                  />
                </div>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <h4 className={styles.itemSubtitle}>
                  {item.subtitle}
                  <span className={styles.arrowDot} aria-hidden="true">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </span>
                </h4>
                <p className={styles.itemText}>
                  {Array.isArray(item.text) ? item.text.join(" ") : item.text}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
