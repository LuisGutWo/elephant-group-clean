import { siteConfig } from "@/config/site";

export function schemaOrganization() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    foundingDate: siteConfig.foundingDate,
    logo: `${siteConfig.url}/images/logo/logo-eg.webp`,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    areaServed: [
      { "@type": "City", name: "Viña del Mar" },
      { "@type": "City", name: "Valparaíso" },
      { "@type": "State", name: "Región de Valparaíso" },
    ],
    sameAs: [siteConfig.social.instagram],
    priceRange: "$$",
  };
}

export function schemaWebsite() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    inLanguage: "es-CL",
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };
}

export function schemaBreadcrumb(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}

export function schemaService({ name, description, url }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${siteConfig.url}${url}`,
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: { "@type": "State", name: "Región de Valparaíso" },
  };
}

export function schemaImageGallery({ name, description, url, count }) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name,
    description,
    url: `${siteConfig.url}${url}`,
    numberOfItems: count,
    provider: { "@id": `${siteConfig.url}/#organization` },
  };
}
