import React from "react";
import Layout from "../components/common/layout";
import GlobalStyle from "../components/common/global";
import styled from "styled-components";
import ServicesList from "../components/services/services-list";
import SectionTitle from "../components/common/section-title";

const Services = () => (
  <>
    <GlobalStyle />
    <Layout>
      <Section>
        <SectionWrapper>
          <SectionTitle titleText="Serivces we offer" />
          <ServicesList />
        </SectionWrapper>
      </Section>
    </Layout>
  </>
);

export default Services;

const Section = styled.section`
  background-color: var(--neut-lightest);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%239C92AC' fill-opacity='0.15' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");

  @media (max-width: 500px) {
    justify-items: center;
  }
`;

const SectionWrapper = styled.div`
  display: grid;
  grid-template: 1fr / 1fr;
  padding: 0 16px 16px 16px;
  width: 100%;
  max-width: 1440px;
  margin: auto;

  @media screen and (max-width: 960px) {
    padding: 0 16px 16px 16px;
  }

  @media screen and (max-width: 500px) {
    padding: 0 4px 16px 4px;
  }
`;
