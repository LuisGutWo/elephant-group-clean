import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/logo/favicon-32.png"
        />
        <link rel="apple-touch-icon" href="/images/logo/logo-light.webp" />
        <meta name="theme-color" content="#1a1a2e" />
      </Head>
      <body>
        <a href="#main-content" className="skip-link">
          Saltar al contenido principal
        </a>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
