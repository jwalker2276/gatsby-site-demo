import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const About = () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
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
    <Section>
      <SectionLeft>
        <SectionTitle>About DownShift</SectionTitle>
        <SectionParagraph>{data.site.siteMetadata.bio}</SectionParagraph>
      </SectionLeft>
      <SectionRight>
        <Img fluid={data.file.childImageSharp.fluid} />
      </SectionRight>
    </Section>
  );
};

export default About;

const Section = styled.section`
  display: grid;
  grid-template: 1fr / 1fr 1fr;
  padding: 64px 16px;
  background-color: var(--neut-lighter);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%239C92AC' fill-opacity='0.15' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
`;

const SectionLeft = styled.div`
  display: grid;
  grid-template: auto auto / 1fr;
  grid-column: 1 / 2;
`;

const SectionRight = styled.div`
  grid-column: 2 / -1;
`;

const SectionTitle = styled.h1`
  font-size: 48px;
  margin: 16px 0 32px 0;
  text-transform: uppercase;
  color: var(--heading-dark);
`;

const SectionParagraph = styled.p`
  color: var(--body-dark);
  font-size: 18px;
  width: 35em;
  line-height: 1.75;
  margin-bottom: 32px;
  border-bottom: 2px solid var(--shadow);
`;
