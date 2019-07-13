import React from "react";
import Layout from "../components/common/layout";
import GlobalStyle from "../components/common/global";
import styled from "styled-components";
import SectionTitle from "../components/common/section-title";

const Cars = () => (
  <>
    <GlobalStyle />
    <Layout>
      <Section>
        <SectionWrapper>
          <SectionTitle titleText="Coming Soon..." />
        </SectionWrapper>
      </Section>
    </Layout>
  </>
);

export default Cars;

const Section = styled.section`
  background-color: var(--neut-lighter);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%239C92AC' fill-opacity='0.15' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
`;

const SectionWrapper = styled.div`
  display: grid;
  grid-template: auto 1fr / 1fr 1fr;
  padding: 64px 16px;
  width: 100%;
  max-width: 1440px;
  margin: auto;
`;
