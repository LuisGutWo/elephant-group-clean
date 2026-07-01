import { useEffect } from "react";
import SeoHead from "@/components/layout/SeoHead";
import { schemaOrganization, schemaWebsite } from "@/lib/schema";
import Loader from "@/components/Common/Loader";
import MainNavbar from "@/components/Common/MainNavbar";
import Header from "@/components/Main/Header";
import AboutUs from "@/components/Main/AboutUs";
import Portfolio from "@/components/Main/Portfolio";
import Clients from "@/components/Main/Clients";
import { Footer, FooterBottom, FooterImg } from "@/components/layout";

export default function HomePage() {
  useEffect(() => {
    document.body.classList.add("sub-bg");
    return () => document.body.classList.remove("sub-bg");
  }, []);

  return (
    <>
      <SeoHead
        canonical="/"
        schemas={[schemaOrganization(), schemaWebsite()]}
      />
      <Loader />
      <MainNavbar />
      <main id="main-content">
        <Header />
        <section id="about" aria-labelledby="about-title">
          <AboutUs />
        </section>
        <Portfolio />
        <Clients />
      </main>
      <FooterImg />
      <Footer />
      <FooterBottom />
    </>
  );
}
