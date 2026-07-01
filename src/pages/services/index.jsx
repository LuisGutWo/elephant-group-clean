import React, { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import Navbar from "@/components/Common/MainNavbar";
import Header from "@/components/InnerPages/Header";
import Services from "@/components/InnerPages/About/Services";
import FooterBottom from "@/components/layout/FooterBottom/FooterBottom";
import SeoHead from "@/components/layout/SeoHead";
import {
  schemaOrganization,
  schemaWebsite,
  schemaBreadcrumb,
  schemaService,
} from "@/lib/schema";

function ServicesPage() {
  useEffect(() => {
    const body = document?.body;
    if (body) {
      body.classList.add("main-bg");
    }
    return () => {
      const cleanupBody = document?.body;
      if (cleanupBody) {
        cleanupBody.classList.remove("main-bg");
      }
    };
  }, []);

  const headerMetadata = {
    subTitle: "SERVICIOS",
    title: "Servicios de Impresión y Publicidad para Empresas",
    text: "SERVICIOS",
    background: "/assets/light/imgs/header/mercadito_main_banner.png",
  };

  const pageDescription =
    "Conoce los servicios de Elephant Group en Viña del Mar y Valparaíso: diseño, letreros, adhesivos, señaléticas e impresión para empresas, comercios y emprendimientos.";

  return (
    <>
      <SeoHead
        title="Servicios de Impresión y Publicidad | Valparaíso"
        description={pageDescription}
        canonical="/services"
        ogImage="/images/og/services-og.png"
        schemas={[
          schemaOrganization(),
          schemaWebsite(),
          schemaBreadcrumb([
            { name: "Inicio", url: "/" },
            { name: "Servicios", url: "/services" },
          ]),
          schemaService({
            name: "Servicios de Impresión y Publicidad",
            description: pageDescription,
            url: "/services",
          }),
        ]}
      />
      <Navbar mainBg />
      <main>
        <Header data={headerMetadata} subBg={true} />
        <Services />
      </main>
      <FooterBottom />
    </>
  );
}

ServicesPage.getLayout = (page) => <Layout>{page}</Layout>;

export default ServicesPage;
