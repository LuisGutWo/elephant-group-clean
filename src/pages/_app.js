import React from "react";
import "@/styles/style.css";
import "swiper/css/bundle";
import { Layout } from "@/components/layout";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);
  return getLayout(<Component {...pageProps} />);
}
