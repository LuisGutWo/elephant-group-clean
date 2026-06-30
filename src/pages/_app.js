import "@/styles/globals.css";
import "swiper/css/bundle";
import Layout from "@/components/layout/Layout";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);
  return getLayout(<Component {...pageProps} />);
}
import "@/styles/globals.css";
import "swiper/css/bundle";
import Layout from "@/components/layout/Layout";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);
  return getLayout(<Component {...pageProps} />);
}
