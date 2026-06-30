import React, { useEffect } from "react";
import SeoHead from "@/components/layout/SeoHead";
import { schemaOrganization, schemaWebsite } from "@/lib/schema";
import Header from "@/components/Main/Header";
import AboutUs from "@/components/Main/AboutUs";
import Portfolio from "@/components/Main/Portfolio";
import Clients from "@/components/Main/Clients";
import {
  MainNavbar,
  Footer,
  FooterBottom,
  FooterImg,
} from "@/components/layout";

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

      {/* Importación corregida apuntando a la nueva barra de navegación del Layout */}
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
