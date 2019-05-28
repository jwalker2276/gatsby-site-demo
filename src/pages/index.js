import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import GlobalStyle from "../components/global";
import Hero from "../components/hero";
import ServicesSmall from "../components/services-small";
import AboutSmall from "../components/about-small";
import ContactSmall from "../components/contact-form-small";

const Index = () => (
  <>
    <GlobalStyle />
    <Layout>
      <Hero />
      <ServicesSmall />
      <AboutSmall />
      <ContactSmall />
    </Layout>
  </>
);

export default Index;
