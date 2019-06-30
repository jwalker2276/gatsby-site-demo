import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import ContactForm from "../common/contact-form";
import IconMail from "../../images/icon-mail.svg";
import IconPhone from "../../images/icon-phone-ring.svg";
import IconAddress from "../../images/icon-location-pin.svg";
import motorImg from "../../images/motor.jpg";
import IconPedals from "../../images/icon-pedals.svg";

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
        <SectionRightBackground />
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
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${motorImg});
  background-size: cover;
  background-repeat: no-repeat;
`;

const SectionRight = styled.div`
  padding: 16px;
  background-color: red;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%239C92AC' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  color: white;
  position: relative;
`;

const SectionRightBackground = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 50%;
  height: 50%;
  background-image: url(${IconPedals});
  background-size: cover;
  z-index: 1;
  opacity: 0.25;
`;

const ContactInfo = styled.div`
  z-index: 5;
`;

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
