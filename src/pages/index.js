import React from "react";
import Layout from "../components/layout";
import GlobalStyle from "../components/global";
import Hero from "../components/hero";
import ServiceAds from "../components/service-ads";
import ServicesSmall from "../components/services-small";
import AboutSmall from "../components/about-small";
import ContactSmall from "../components/contact-form-small";

const Index = () => (
  <>
    <GlobalStyle />
    <Layout>
      <Hero />
      <ServiceAds />
      <ServicesSmall />
      <AboutSmall />
      <ContactSmall />
    </Layout>
  </>
);

export default Index;
