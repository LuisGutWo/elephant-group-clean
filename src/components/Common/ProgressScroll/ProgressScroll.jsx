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
      className={`${styles.progressWrap} progress-wrap`}
      role="button"
      aria-label="Volver al inicio de la página"
    >
      <span className={styles.arrowIcon} aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" focusable="false">
          <path
            d="M12 18V6M12 6L7 11M12 6L17 11"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {progressCircleSvg}
    </div>
  );
};

export default ProgressScroll;
