import React from "react";
import { Helmet } from "react-helmet";

export default () => (
  <Helmet>
    {/* <!-- Primary Meta Tags --> */}
    <title>Downshift (Demo Site) by Jordan Walker</title>
    <meta name="title" content="Downshift (Demo Site) by Jordan Walker" />
    <meta name="description" content="Make driving fun again" />

    {/* <!-- Open Graph / Facebook --> */}
    <meta property="og:type" content="website" />
    <meta
      property="og:url"
      content="https://gatsby-site-demo-73b3b1.netlify.com/"
    />
    <meta
      property="og:title"
      content="Downshift (Demo Site) by Jordan Walker"
    />
    <meta property="og:description" content="Make driving fun again" />
    <meta
      property="og:image"
      content="https://gatsby-site-demo-73b3b1.netlify.com/social_image.jpg"
    />

    {/* <!-- Twitter --> */}
    <meta property="twitter:card" content="summary_large_image" />
    <meta
      property="twitter:url"
      content="https://gatsby-site-demo-73b3b1.netlify.com/"
    />
    <meta
      property="twitter:title"
      content="Downshift (Demo Site) by Jordan Walker"
    />
    <meta property="twitter:description" content="Make driving fun again" />
    <meta
      property="twitter:image"
      content="https://gatsby-site-demo-73b3b1.netlify.com/social_image.jpg"
    />

    {/* <!-- Favicomatic --> */}
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#272625" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <meta name="msapplication-TileColor" content="#b91d47" />
    <meta name="msapplication-config" content="/browserconfig.xml" />
    <meta name="theme-color" content="#272625" />
  </Helmet>
);
