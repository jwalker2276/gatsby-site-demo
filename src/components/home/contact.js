import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import useContactForm from "../../customHooks/customFormHook";

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

  // Function to call when form is submitted
  const sendContactForm = () => {
    alert(
      `User sent message!
       Name: ${inputs.name} 
       Email: ${inputs.email} 
       Subject: ${inputs.subject} 
       Message: ${inputs.message}`
    );
  };

  // Custom Hook
  const { inputs, handleInputChange, handleSubmit } = useContactForm(
    sendContactForm
  );

  return (
    <Section>
      <SectionLeft>
        <Form onSubmit={handleSubmit}>
          <FormLabel for="name">
            Name
            <FormInput
              type="text"
              name="name"
              onChange={handleInputChange}
              required
            />
          </FormLabel>
          <FormLabel for="email">
            Email
            <FormInput
              type="email"
              name="email"
              onChange={handleInputChange}
              required
            />
          </FormLabel>
          <FormLabel for="subject">
            Subject
            <FormInput
              type="text"
              name="subject"
              onChange={handleInputChange}
              required
            />
          </FormLabel>
          <FormLabel for="message">
            Message
            <FormMessage
              type="text"
              name="message"
              onChange={handleInputChange}
              required
            />
          </FormLabel>
          <FormButton type="submit" value="Submit">
            Send
          </FormButton>
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

const FormMessage = styled.textarea`
  width: 100%;
  box-sizing: border-box;
`;

const FormButton = styled.button`
  cursor: pointer;
`;
