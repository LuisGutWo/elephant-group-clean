import React, { useEffect } from "react";
import SeoHead from "@/components/layout/SeoHead";
import Layout from "@/components/layout/Layout";
import Navbar from "@/components/Common/MainNavbar";
import Header from "@/components/InnerPages/Header";
import Story from "@/components/InnerPages/About/Story";
import FooterBottom from "@/components/layout/FooterBottom/FooterBottom";
import FooterImg from "@/components/layout/FooterImg/FooterImg";
import Footer from "@/components/layout/Footer";

function QuotePage() {
  useEffect(() => {
    const body = document?.body;
    if (body) {
      body.classList.add("main-bg");
    }
    return () => {
      const body = document?.body;
      if (body) {
        body.classList.remove("main-bg");
      }
    };
  }, []);

  const headerMetadata = {
    subTitle: "SOLICITA TU COTIZACIÓN",
    title:
      "Cuéntanos tu proyecto y recibe una propuesta personalizada de implementos publicitarios en menos de 24 horas.",
    text: "Cotización",
  };

  return (
    <>
      <SeoHead
        title="Cotización | Elephant Group - Presupuesto de Implementos Publicitarios"
        description="Solicita tu cotización personalizada de implementos publicitarios en Valparaíso. Material POP, señalética, gigantografías y merchandising. Respuesta en 24 horas. Presupuesto sin compromiso."
        keywords="cotización publicidad, presupuesto implementos publicitarios, cotizar material POP, precio señalética, presupuesto merchandising, cotización gigantografías Viña del Mar, Valparaíso y V Región, solicitar presupuesto publicidad V Región"
        author="Elephant Group"
        ogTitle="Cotización | Elephant Group - Presupuesto Implementos Publicitarios"
        ogDescription="Solicita tu cotización personalizada. Respuesta en 24 horas. Material POP, señalética y merchandising en Viña del Mar, Valparaíso y V Región."
        ogType="website"
        twitterCard="summary_large_image"
        twitterTitle="Cotización | Elephant Group"
        twitterDescription="Solicita tu presupuesto personalizado de implementos publicitarios. Respuesta en 24 horas."
      />
      <Navbar mainBg />
      <main>
        <Header
          data={headerMetadata}
          background="/images/background/viña-del-mar.jpg"
          backgroundAlt="Imagen de Viña del Mar, ciudad de la V Región de Chile"
          backgroundPosition="center"
          backgroundSize="cover"
          backgroundOverlay="rgba(0, 0, 0, 0.5)"
          xs={{ padding: "6rem 1rem 2rem", textAlign: "center" }}
          md={{ padding: "8rem 2rem 3rem", textAlign: "center" }}
          lg={{ padding: "10rem 3rem 4rem", textAlign: "center" }}
        />

        <Story />
        <FooterImg />
        <Footer />
      </main>
      <FooterBottom />
    </>
  );
}

QuotePage.getLayout = (page) => <Layout>{page}</Layout>;

export default QuotePage;
