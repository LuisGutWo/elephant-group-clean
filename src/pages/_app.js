import React from "react";
import "@/styles/style.css";
import "swiper/css/bundle";
import { Layout, Loader } from "@/components/layout";

export default function App({ Component, pageProps }) {
  // Conserva el patrón de layouts dinámicos (Per-Page Layouts) si una página específica lo requiere
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  return (
    <>
      <Loader />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
