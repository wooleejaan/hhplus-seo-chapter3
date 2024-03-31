import { Helmet } from "react-helmet-async";

const MetaForOpenGraph = () => (
  <Helmet>
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="hhplus-chapter3" />
    <meta property="og:title" content="hhplus-chapter3 title" />
    <meta property="og:url" content="hhplus-chapter3 url" />
    <meta property="og:description" content="hhplus-chapter3 description" />
  </Helmet>
);

const MetaForTwitter = () => (
  <Helmet>
    <meta name="twitter:creator" content="hhplus-chapter3 creator" />
    <meta name="twitter:card" content="hhplus-chapter3 card" />
    <meta name="twitter:title" content="hhplus-chapter3 title" />
    <meta name="twitter:description" content="hhplus-chapter3 description" />
  </Helmet>
);

const LinkForFavicon = () => (
  <Helmet>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="shortcut icon" href="/favicon.ico" />
  </Helmet>
);

export { MetaForOpenGraph, MetaForTwitter, LinkForFavicon };
