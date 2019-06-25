import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import ContactForm from "../common/contact-form";
import IconMail from "../../images/icon-mail.svg";
import IconPhone from "../../images/icon-phone-ring.svg";
import IconAddress from "../../images/icon-location-pin.svg";

const Contact = () => {
  const data = useStaticQuery(graphql`
    query FormQuery {
      site {
        siteMetadata {
          email
          phone
          address
        }
      }
    }
  `);

  const { email, phone, address } = data.site.siteMetadata;

  return (
    <Section>
      <SectionLeft>
        <ContactForm />
      </SectionLeft>
      <SectionRight>
        <SectionTitle>Contact Us</SectionTitle>
        <ContactInfo>
          <ContactLabel>Email:</ContactLabel>
          <ContactText>
            <Icon src={IconMail} alt="Email" />
            {email}
          </ContactText>
        </ContactInfo>
        <ContactInfo>
          <ContactLabel>Phone:</ContactLabel>
          <ContactText>
            <Icon src={IconPhone} alt="Email" />
            {phone}
          </ContactText>
        </ContactInfo>
        <ContactInfo>
          <ContactLabel>Address:</ContactLabel>
          <ContactText>
            <Icon src={IconAddress} alt="Email" />
            {address}
          </ContactText>
        </ContactInfo>
      </SectionRight>
    </Section>
  );
};

export default Contact;

const Section = styled.section`
  display: grid;
  grid-template: 1fr / 3fr 2fr;
`;

const SectionLeft = styled.div`
  background-color: black;
  color: white;
  padding: 16px;
`;

const SectionRight = styled.div`
  background-color: red;
  padding: 16px;
`;

const ContactInfo = styled.div``;

const SectionTitle = styled.h1`
  font-size: 48px;
  padding: 12px 0;
`;

const ContactLabel = styled.h2`
  font-size: 20px;
  margin: 0;
`;

const ContactText = styled.p`
  font-size: 20px;
  margin: 16px 0 32px 0;
`;

const Icon = styled.img`
  width: 16px;
  margin-right: 16px;
`;
