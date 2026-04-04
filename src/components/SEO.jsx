import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = () => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>Harsh Gandharv - Full Stack Developer | Java & React Expert</title>
      <meta
        name="title"
        content="Harsh Gandharv - Full Stack Developer | Java & React Expert"
      />
      <meta
        name="description"
        content="Experienced Full Stack Developer specializing in Spring Boot, React.js, Microservices, and modern web technologies. 4+ years of professional experience building scalable applications."
      />
      <meta
        name="keywords"
        content="Full Stack Developer, Java Developer, React Developer, Spring Boot, Microservices, React Native, Harsh Gandharv, Software Engineer, Web Development"
      />
      <meta name="author" content="Harsh Gandharv" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://harsh-arv.github.io/myPortfolio/" />
      <meta
        property="og:title"
        content="Harsh Gandharv - Full Stack Developer | Java & React Expert"
      />
      <meta
        property="og:description"
        content="Experienced Full Stack Developer specializing in Spring Boot, React.js, Microservices, and modern web technologies. 4+ years of professional experience."
      />
      <meta
        property="og:image"
        content="https://harsh-arv.github.io/myPortfolio/preview.png"
      />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://harsh-arv.github.io/myPortfolio/"
      />
      <meta
        property="twitter:title"
        content="Harsh Gandharv - Full Stack Developer | Java & React Expert"
      />
      <meta
        property="twitter:description"
        content="Experienced Full Stack Developer specializing in Spring Boot, React.js, Microservices, and modern web technologies. 4+ years of professional experience."
      />
      <meta
        property="twitter:image"
        content="https://harsh-arv.github.io/myPortfolio/preview.png"
      />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#06b6d4" />
      <link rel="canonical" href="https://harsh-arv.github.io/myPortfolio/" />
    </Helmet>
  );
};

export default SEO;
