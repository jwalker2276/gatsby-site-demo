import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import ContactForm from "../common/contact-form";
import motorImg from "../../images/motor.jpg";
import IconPedals from "../../images/icon-pedals.svg";
import { EmailIcon, PhoneIcon, LocationIcon } from "../common/icons";

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
      <SectionWrapper>
        <SectionLeft>
          <ContactForm />
        </SectionLeft>
        <SectionRight>
          <SectionRightBackground />
          <SectionTitle>Contact Us</SectionTitle>
          <ContactInfo>
            <ContactLabel>Email:</ContactLabel>
            <ContactText>
              <EmailIcon width="20px" color="hsl(4,27%,98%)" />
              {email}
            </ContactText>
          </ContactInfo>
          <ContactInfo>
            <ContactLabel>Phone:</ContactLabel>
            <ContactText>
              <PhoneIcon width="20px" color="hsl(4,27%,98%)" />
              {phone}
            </ContactText>
          </ContactInfo>
          <ContactInfo>
            <ContactLabel>Address:</ContactLabel>
            <ContactText>
              <LocationIcon width="20px" color="hsl(4,27%,98%)" />
              {address}
            </ContactText>
          </ContactInfo>
        </SectionRight>
      </SectionWrapper>
    </Section>
  );
};

export default Contact;

const Section = styled.section`
  background-color: var(--neut-lightest);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%239C92AC' fill-opacity='0.15' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
`;

const SectionWrapper = styled.div`
  display: grid;
  grid-template: 1fr / 3fr 2fr;
  width: 100%;
  max-width: 1440px;
  margin: auto;
`;

const SectionLeft = styled.div`
  background-color: var(--neut-darkest);
  color: var(--body-light);
  padding: 16px;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${motorImg});
  background-size: cover;
  background-repeat: no-repeat;
`;

const SectionRight = styled.div`
  padding: 16px;
  border-left: 4px solid var(--red-dark);
  background-color: var(--red-base);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%239C92AC' fill-opacity='0.40' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  color: var(--body-light);
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
  opacity: 0.1;
`;

const ContactInfo = styled.div`
  z-index: 5;
`;

const SectionTitle = styled.h1`
  font-size: 48px;
  padding: 12px 0;
  color: var(--heading-light);
  text-shadow: 1px 1px 2px var(--neut-darkest);
`;

const ContactLabel = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  color: var(--body-light);
  text-shadow: 1px 1px 2px var(--neut-darkest);
`;

const ContactText = styled.p`
  font-size: 20px;
  margin: 16px 0 32px 0;
  color: var(--body-light);
  text-shadow: 1px 1px 2px var(--neut-darkest);
`;
