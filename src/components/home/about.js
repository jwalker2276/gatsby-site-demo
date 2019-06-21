import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const About = () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      file(relativePath: { regex: "/aboutpicturesmall/" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Section>
      <SectionLeft>
        <SectionTitle>About Down Shift</SectionTitle>
        <SectionParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eget semper magna. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nulla nec bibendum est. Fusce posuere, risus et tempor mollis,
          mi dui mollis nisi, in aliquet nibh nunc eget orci. Morbi commodo
          placerat scelerisque. Aenean rhoncus, nulla id aliquam condimentum,
          magna arcu tincidunt purus, id mattis orci neque at elit. Vestibulum
          sed aliquam dui. Quisque hendrerit eu orci sed ornare.
        </SectionParagraph>
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
  margin: 10px 10px;
  padding: 20px 0;
`;

const SectionLeft = styled.div`
  display: grid;
  grid-template: auto auto / 1fr;
  grid-column: 1 / 2;
  padding: 10px;
`;

const SectionRight = styled.div`
  grid-column: 2 / -1;
`;

const SectionTitle = styled.h1`
  font-size: 30px;
  margin: 24px 0;
`;

const SectionParagraph = styled.p`
  width: 35em;
`;
