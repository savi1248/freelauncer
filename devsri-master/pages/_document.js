import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta charset="utf-8" />
      <meta http-equiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta
        name="title"
        content="Web Consulting and Development Services — Devsri"
      />
      <meta
        name="description"
        content="I am a full-stack developer with ten years of experience who can provide consultation and coding to build web and mobile applications."
      />
      <meta name="robots" content="index, follow" />
      <meta
        property="og:title"
        content="Web Consulting and Development Services — Devsri"
      />
      <meta property="og:site_name" content="Devsri" />
      <meta property="og:url" content="https://www.devsri.com/" />
      <meta
        property="og:description"
        content="I am a full-stack developer with ten years of experience who can provide consultation and coding to build web and mobile applications."
      />
      <meta property="og:image" content="https://www.devsri.com/assets/images/devsri-og.png" />
      <meta property="og:image:url" content="https://www.devsri.com/assets/images/devsri-og.png" />
      
      <meta property="og:locale" content="en_US" />
      <meta name="image" content="https://www.devsri.com/assets/images/devsri-og.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:title"
        content="Web Consulting and Development Services — Devsri"
      />
      <meta name="twitter:site" content="@srikanthsridhar" />
      <meta name="twitter:creator" content="@srikanthsridhar" />
      <meta name="twitter:image" content="https://www.devsri.com/assets/images/devsri-og.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <link rel="shortcut icon" href="./assets/images/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
