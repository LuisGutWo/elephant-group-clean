import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import SeoHead from "@/components/layout/SeoHead";
import { schemaBreadcrumb } from "@/lib/schema";
import MainNavbar from "@/components/Common/MainNavbar";
import { FooterBottom } from "@/components/layout";
import ContactHeader from "@/components/InnerPages/Contact/ContactHeader";
import Form from "@/components/InnerPages/Contact";

export default function ContactPage() {
  useEffect(() => {
    document.body.classList.add("main-bg");
    return () => document.body.classList.remove("main-bg");
  }, []);

  return (
    <>
      <SeoHead
        title="Contacto y Cotización"
        description="Contáctanos para soluciones de diseño gráfico, impresión digital y señalética en Valparaíso y Viña del Mar. Respuesta en menos de 24 horas."
        canonical="/contact/"
        schemas={[
          schemaBreadcrumb([
            { name: "Inicio", url: "/" },
            { name: "Contacto", url: "/contact/" },
          ]),
        ]}
      />
      <MainNavbar mainBg />
      <main id="main-content">
        <ContactHeader />
        <Form />
      </main>
      <FooterBottom />
    </>
  );
}

ContactPage.getLayout = (page) => <Layout>{page}</Layout>;
