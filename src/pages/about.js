import React from "react";
import Layout from "../components/common/layout";
import GlobalStyle from "../components/common/global";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";
import SectionTitle from "../components/common/section-title";

const About = () => {
  const data = useStaticQuery(graphql`
    query AboutPageQuery {
      file(relativePath: { regex: "/aboutpicturesmall/" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          bio
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Section>
          <SectionWrapper>
            <SectionLeft>
              <SectionTitle titleText="About Downshift" />
              <SectionParagraph>{data.site.siteMetadata.bio}</SectionParagraph>
            </SectionLeft>
            <SectionRight>
              <Img fluid={data.file.childImageSharp.fluid} />
            </SectionRight>
          </SectionWrapper>
        </Section>
      </Layout>
    </>
  );
};

export default About;

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
  align-items: center;
  grid-column-gap: 32px;

  @media screen and (max-width: 960px) {
    padding: 0px 4px;
    grid-template: 1fr / 1fr;
  }
`;

const SectionLeft = styled.div`
  display: grid;
  grid-template: auto auto / 1fr;
  grid-column: 1 / 2;
  border-right: 2px solid var(--shadow);

  @media screen and (max-width: 1360px) {
    border-right: none;
  }

  @media screen and (max-width: 960px) {
    border-right: none;
    justify-items: center;
    padding: 0 8px;
  }
`;

const SectionRight = styled.div`
  grid-column: 2 / -1;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const SectionParagraph = styled.p`
  color: var(--body-dark);
  font-size: 18px;
  width: 35em;
  line-height: 1.75;
  margin-bottom: 32px;

  @media screen and (max-width: 1300px) {
    border-top: 2px solid var(--shadow);
    padding: 16px 0;
  }

  @media screen and (max-width: 700px) {
    width: auto;
    font-size: 16px;
  }

  @media screen and (max-width: 500px) {
    font-size: 14px;
    border-bottom: 2px solid var(--shadow);
  }
`;
