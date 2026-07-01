import React from "react";
import styles from "./HeaderShop.module.css";

function Header({ data }) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.fullCol}>
            <div className={styles.caption}>
              <h6 className={styles.subTitle}>{data.subTitle}</h6>
              <h1 className={styles.title}>{data.title}</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
