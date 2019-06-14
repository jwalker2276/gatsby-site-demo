import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Hero = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      file(relativePath: { regex: "/auto/" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Img fluid={data.file.childImageSharp.fluid} />;
};

export default Hero;
