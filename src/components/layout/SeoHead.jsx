import Head from "next/head";
import { siteConfig } from "@/config/site";

export default function SeoHead({
  title,
  description,
  canonical,
  ogImage,
  schemas = [],
  noindex = false,
}) {
  const toAbsoluteUrl = (value, fallback) => {
    const candidate = value || fallback;
    if (!candidate) return siteConfig.url;
    if (/^https?:\/\//i.test(candidate)) return candidate;
    return `${siteConfig.url}${candidate}`;
  };

  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | ${siteConfig.tagline}`;
  const metaDesc = description || siteConfig.description;
  const canonicalUrl = toAbsoluteUrl(canonical, siteConfig.url);
  const image = toAbsoluteUrl(ogImage, siteConfig.ogImage);

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDesc} />
      <link rel="canonical" href={canonicalUrl} />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large"
        />
      )}
      <link rel="alternate" hrefLang="es-CL" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:locale" content={siteConfig.locale} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={image} />
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Head>
  );
}
