import React, { useEffect } from "react";
import { progressCircleSvg } from "@/data/Main/icons";
import scrollToTop from "@/common/scrollToTop";
import styles from "./ProgressScroll.module.css";

const ProgressScroll = () => {
  useEffect(() => {
    const cleanup = scrollToTop();
    return cleanup;
  }, []);

  return (
    <div
      className={styles.progressWrap}
      role="button"
      aria-label="Volver al inicio de la página"
    >
      {progressCircleSvg}
    </div>
  );
};

export default ProgressScroll;
