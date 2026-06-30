import { useEffect, useState } from "react";
import Router from "next/router";
import styles from "./RouteProgress.module.css";

function RouteProgress() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    let hideTimer;

    const onStart = () => {
      clearTimeout(hideTimer);
      setActive(true);
    };

    const onDone = () => {
      hideTimer = setTimeout(() => setActive(false), 180);
    };

    Router.events.on("routeChangeStart", onStart);
    Router.events.on("routeChangeComplete", onDone);
    Router.events.on("routeChangeError", onDone);

    return () => {
      clearTimeout(hideTimer);
      Router.events.off("routeChangeStart", onStart);
      Router.events.off("routeChangeComplete", onDone);
      Router.events.off("routeChangeError", onDone);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`${styles.progressBar} ${active ? styles.isActive : ""}`}
    />
  );
}

export default RouteProgress;
