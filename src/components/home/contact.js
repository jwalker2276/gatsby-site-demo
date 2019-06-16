import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import ContactForm from "../common/contact-form";

const Contact = () => {
  const data = useStaticQuery(graphql`
    query FormQuery {
      site {
        siteMetadata {
          email
          phone
        }
      }
    }
  `);

  return (
    <Section>
      <SectionLeft>
        <ContactForm />
      </SectionLeft>
      <SectionRight>
        <SectionTitle>Contact Us</SectionTitle>
        <ContactText>Email:</ContactText>
        <ContactText>{data.site.siteMetadata.email}</ContactText>
        <ContactText>Phone:</ContactText>
        <ContactText>{data.site.siteMetadata.phone}</ContactText>
      </SectionRight>
    </Section>
  );
};

export default Contact;

const Section = styled.section`
  display: grid;
  grid-template: 1fr / 3fr 2fr;
`;

const SectionLeft = styled.div``;

const SectionTitle = styled.h1`
  font-size: 36px;
`;

const ContactText = styled.h2`
  font-size: 18px;
`;

const SectionRight = styled.div``;
