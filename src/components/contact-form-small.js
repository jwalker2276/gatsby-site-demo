import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

const ContactFormSmall = () => {
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
        <Form>
          <FormLabel>
            Name
            <FormInput />
          </FormLabel>
          <FormLabel>
            Email
            <FormInput />
          </FormLabel>
          <FormLabel>
            Subject
            <FormInput />
          </FormLabel>
          <FormLabel>
            Message
            <FormInput />
          </FormLabel>
          <FormButton>Send</FormButton>
        </Form>
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

const Form = styled.form`
  display: grid;
  grid-template: 1fr 1fr 1fr 1fr 2fr / 1fr;
`;

const FormLabel = styled.label`
  width: 100%;
`;

const FormInput = styled.input`
  width: 100%;
  box-sizing: border-box;
`;

const FormButton = styled.button`
  cursor: pointer;
`;

export default ContactFormSmall;
