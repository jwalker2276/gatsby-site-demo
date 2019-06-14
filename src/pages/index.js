import React from "react";
import Layout from "../components/common/layout";
import GlobalStyle from "../components/common/global";
import Hero from "../components/home/hero";
import ServiceAds from "../components/home/service-ads";
import ServicesSmall from "../components/home/services";
import AboutSmall from "../components/home/about";
import ContactSmall from "../components/home/contact";

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
