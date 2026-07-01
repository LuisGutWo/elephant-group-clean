import { useEffect } from "react";
import SeoHead from "@/components/layout/SeoHead";
import Layout from "@/components/layout/Layout";
import {
  schemaBreadcrumb,
  schemaOrganization,
  schemaImageGallery,
} from "@/lib/schema";
import MainNavbar from "@/components/Common/MainNavbar";
import { FooterBottom } from "@/components/layout";
import HeaderPortfolio from "@/components/Main/Portfolio/HeaderPortfolio";
import GridPortfolioImages from "@/components/Main/Portfolio/GridPortfolioImages";

const headerData = {
  subTitle: "Portafolio de Trabajos",
  title: "Más de 500 Proyectos Exitosos en Valparaíso y Viña del Mar",
  description:
    "Desde 2018 realizamos proyectos de letreros CNC, señalética industrial, impresión digital y diseño gráfico para empresas de la Región de Valparaíso.",
};

export default function PortfolioPage() {
  useEffect(() => {
    document.body.classList.add("main-bg");
    return () => document.body.classList.remove("main-bg");
  }, []);

  return (
    <>
      <SeoHead
        title="Portafolio de Trabajos Publicitarios"
        description="Más de 500 proyectos en Viña del Mar y Valparaíso: letreros CNC, señalética industrial, impresión digital y diseño gráfico."
        canonical="/portfolio/"
        ogImage="/images/og/og-default.webp"
        schemas={[
          schemaBreadcrumb([
            { name: "Inicio", url: "/" },
            { name: "Portafolio", url: "/portfolio/" },
          ]),
          schemaOrganization(),
          schemaImageGallery({
            name: "Portafolio de Trabajos Publicitarios - Elephant Group",
            description:
              "Galería de más de 500 proyectos en Viña del Mar y Valparaíso.",
            url: "/portfolio/",
            count: "500+",
          }),
        ]}
      />
      <MainNavbar mainBg />
      <main id="main-content">
        <HeaderPortfolio data={headerData} />
        <GridPortfolioImages />
      </main>
      <FooterBottom subBg />
    </>
  );
}

PortfolioPage.getLayout = (page) => <Layout>{page}</Layout>;
