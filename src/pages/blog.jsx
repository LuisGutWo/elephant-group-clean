import React, { useEffect } from "react";
import SeoHead from "@/components/layout/SeoHead";
import Layout from "@/components/layout/Layout";
import Navbar from "@/components/Common/MainNavbar";
import BlogHeader from "@/components/Blog/BlogHeader";
import BlogGrid from "@/components/Blog/BlogGrid";
import FooterBottom from "@/components/layout/FooterBottom/FooterBottom";

function BlogPage() {
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

  return (
    <>
      <SeoHead
        title="Blog de Publicidad y Diseño | Elephant Group - Tendencias e Insights"
        description="Mantente al día con las últimas tendencias en diseño gráfico, impresión, señalética, branding y marketing publicitario. Artículos especializados para profesionales del rubro."
        keywords="blog publicidad, blog diseño gráfico, tendencias impresión, marketing publicitario, señalética, branding, packaging, merchandising, impresión digital, impresión offset, Viña del Mar, Valparaíso y V Región"
        author="Elephant Group"
        robots="index, follow"
        language="Spanish"
        geoRegion="CL-VS"
        geoPlacename="Viña del Mar, Valparaíso y V Región"
        ogType="website"
        ogUrl="https://www.elephantgroup.cl/blog"
        ogTitle="Blog de Publicidad y Diseño | Elephant Group"
        ogDescription="Tendencias, tecnologías y estrategias en diseño gráfico, impresión y marketing publicitario."
        ogImage="https://www.elephantgroup.cl/light/assets/imgs/logo-light.webp"
        ogSiteName="Elephant Group"
        ogLocale="es_CL"
        twitterCard="summary_large_image"
        twitterUrl="https://www.elephantgroup.cl/blog"
        twitterTitle="Blog de Publicidad y Diseño | Elephant Group"
        twitterDescription="Artículos especializados sobre tendencias en diseño, impresión y marketing publicitario."
        twitterImage="https://www.elephantgroup.cl/light/assets/imgs/logo-light.webp"
        canonical="https://www.elephantgroup.cl/blog"
        revisitAfter="7 days"
        distribution="global"
        rating="general"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Blog Elephant Group",
            description:
              "Artículos y recursos sobre diseño gráfico, impresión, señalética y marketing publicitario",
            url: "https://www.elephantgroup.cl/blog",
            publisher: {
              "@type": "Organization",
              name: "Elephant Group",
              logo: {
                "@type": "ImageObject",
                url: "https://www.elephantgroup.cl/light/assets/imgs/logo-light.webp",
              },
            },
            inLanguage: "es-CL",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.elephantgroup.cl/blog",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Inicio",
                item: "https://www.elephantgroup.cl",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://www.elephantgroup.cl/blog",
              },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Elephant Group",
            url: "https://www.elephantgroup.cl",
            logo: "https://www.elephantgroup.cl/light/assets/imgs/logo-light.webp",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+56-32-297-5510",
              contactType: "customer service",
              areaServed: "CL",
              availableLanguage: ["Spanish"],
            },
            sameAs: [
              "https://www.facebook.com/elephantgroup.cl",
              "https://www.instagram.com/elephantgroup.cl",
            ],
          },
        ]}
      />{" "}
      <Navbar mainBg />
      <main className="main-bg">
        <BlogHeader />
        <BlogGrid />
      </main>
      <FooterBottom />
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Blog Elephant Group",
            description:
              "Artículos y recursos sobre diseño gráfico, impresión, señalética y marketing publicitario",
            url: "https://www.elephantgroup.cl/blog",
            publisher: {
              "@type": "Organization",
              name: "Elephant Group",
              logo: {
                "@type": "ImageObject",
                url: "https://www.elephantgroup.cl/light/assets/imgs/logo-light.webp",
              },
            },
            inLanguage: "es-CL",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.elephantgroup.cl/blog",
            },
          }),
        }}
      />
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Inicio",
                item: "https://www.elephantgroup.cl",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://www.elephantgroup.cl/blog",
              },
            ],
          }),
        }}
      />
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Elephant Group",
            url: "https://www.elephantgroup.cl",
            logo: "https://www.elephantgroup.cl/light/assets/imgs/logo-light.webp",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+56-32-297-5510",
              contactType: "customer service",
              areaServed: "CL",
              availableLanguage: ["Spanish"],
            },
            sameAs: [
              "https://www.facebook.com/elephantgroup.cl",
              "https://www.instagram.com/elephantgroup.cl",
            ],
          }),
        }}
      />
    </>
  );
}

BlogPage.getLayout = (page) => <Layout>{page}</Layout>;

export default BlogPage;

