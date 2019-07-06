import React from "react";
import Layout from "../components/common/layout";
import GlobalStyle from "../components/common/global";
import styled from "styled-components";
import ServicesList from "../components/services/services-list";

const Services = () => (
  <>
    <GlobalStyle />
    <Layout>
      <Section>
        <SectionHeading>Serivces</SectionHeading>
        <ServicesList />
      </Section>
    </Layout>
  </>
);

export default Services;

const Section = styled.section`
  display: grid;
  grid-template: 1fr / 1fr;
  padding: 64px 16px;
  background-color: var(--neut-lightest);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%239C92AC' fill-opacity='0.15' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
`;

const SectionHeading = styled.h1`
  font-size: 48px;
  margin: 16px 0 32px 0;
  text-transform: uppercase;
  color: var(--heading-dark);
`;
