import React from "react";
import { Helmet } from "react-helmet";
const Head = () => {
  return (
    <Helmet>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Primary meta tags  */}
      <title>20 Squared</title>
      <meta name="title" content="20 Squared" />
      <meta
        name="description"
        content="A fun game about creating and sharing pixel art"
      />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="" />
      <meta property="og:title" content="20 Squared" />
      <meta
        property="og:description"
        content="A fun game about creating and sharing pixel art"
      />
      <meta
        property="og:image"
        content="../meta-images/slashjp-logo-500w.png"
      />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="" />
      <meta property="twitter:title" content="20 Squared" />
      <meta
        property="twitter:description"
        content="A fun game about creating and sharing pixel art"
      />
      <meta
        property="twitter:image"
        content="../meta-images/slashjp-logo-500w.png"
      />

      {/* <!-- Favicon Code --> */}
      <link
        rel="apple-touch-icon-precomposed"
        sizes="57x57"
        href="../meta-images/apple-touch-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="114x114"
        href="../meta-images/apple-touch-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="72x72"
        href="../meta-images/apple-touch-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="144x144"
        href="../meta-images/apple-touch-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="60x60"
        href="../meta-images/apple-touch-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="120x120"
        href="../meta-images/apple-touch-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="76x76"
        href="../meta-images/apple-touch-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="152x152"
        href="../meta-images/apple-touch-icon-152x152.png"
      />
      <link
        rel="icon"
        type="image/png"
        href="../meta-images/favicon-196x196.png"
        sizes="196x196"
      />
      <link
        rel="icon"
        type="image/png"
        href="../meta-images/favicon-96x96.png"
        sizes="96x96"
      />
      <link
        rel="icon"
        type="image/png"
        href="../meta-images/favicon-32x32.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href="../meta-images/favicon-16x16.png"
        sizes="16x16"
      />
      <link
        rel="icon"
        type="image/png"
        href="../meta-images/favicon-128.png"
        sizes="128x128"
      />
      <meta name="application-name" content="&nbsp;" />
      <meta name="msapplication-TileColor" content="#FFFFFF" />
      <meta
        name="msapplication-TileImage"
        content="../meta-images/mstile-144x144.png"
      />
      <meta
        name="msapplication-square70x70logo"
        content="../meta-images/mstile-70x70.png"
      />
      <meta
        name="msapplication-square150x150logo"
        content="../meta-images/mstile-150x150.png"
      />
      <meta
        name="../msapplication-wide310x150logo"
        content="../meta-images/mstile-310x150.png"
      />
      <meta
        name="msapplication-square310x310logo"
        content="../meta-images/mstile-310x310.png"
      />
      {/* <!-- End of Favicon Code --> */}
    </Helmet>
  );
};

export default Head;
