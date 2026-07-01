import styles from "./HeaderPortfolio.module.css";

export default function HeaderPortfolio({ data }) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>{data.subTitle}</p>
        <h1 className={styles.title}>{data.title}</h1>
        {data.description && (
          <p className={styles.description}>{data.description}</p>
        )}
      </div>
    </header>
  );
}
