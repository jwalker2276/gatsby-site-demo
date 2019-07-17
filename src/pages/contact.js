import React from "react";
import Layout from "../components/common/layout";
import GlobalStyle from "../components/common/global";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import ContactForm from "../components/common/contact-form";
import Icon from "../components/common/social-icon";
import { EmailIcon, PhoneIcon, LocationIcon } from "../components/common/icons";
import SectionTitle from "../components/common/section-title";
import facebookIcon from "../images/icon-facebook.svg";
import twitterIcon from "../images/icon-twitter.svg";
import instagramIcon from "../images/icon-insta.svg";
import youtubeIcon from "../images/icon-youtube.svg";

const Contact = () => {
  const data = useStaticQuery(graphql`
    query ContactPageQuery {
      site {
        siteMetadata {
          email
          phone
          address
          youtube
          instagram
          twitter
          facebook
        }
      }
    }
  `);

  const {
    email,
    phone,
    address,
    youtube,
    instagram,
    twitter,
    facebook,
  } = data.site.siteMetadata;

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Section>
          <SectionWrapper>
            <SectionLeft>
              <SectionTitle titleText="Contact Us" />
              <ContactInfo>
                <ContactLabel>Email :</ContactLabel>
                <ContactText>
                  <EmailIcon width="20px" color="hsl(4,2%,11%)" />
                  {email}
                </ContactText>
              </ContactInfo>
              <ContactInfo>
                <ContactLabel>Phone :</ContactLabel>
                <ContactText>
                  <PhoneIcon width="20px" color="hsl(4,2%,11%)" />
                  {phone}
                </ContactText>
              </ContactInfo>
              <ContactInfo>
                <ContactLabel>Address :</ContactLabel>
                <ContactText>
                  <LocationIcon width="20px" color="hsl(4,2%,11%)" />
                  {address}
                </ContactText>
              </ContactInfo>
              <ContactInfo>
                <ContactLabel>Connect with us :</ContactLabel>
                <IconList>
                  <IconItem>
                    <Icon
                      iconLink={youtube}
                      iconImage={youtubeIcon}
                      iconName="youtube"
                    />
                  </IconItem>
                  <IconItem>
                    <Icon
                      iconLink={instagram}
                      iconImage={instagramIcon}
                      iconName="instagram"
                    />
                  </IconItem>
                  <IconItem>
                    <Icon
                      iconLink={twitter}
                      iconImage={twitterIcon}
                      iconName="twitter"
                    />
                  </IconItem>
                  <IconItem>
                    <Icon
                      iconLink={facebook}
                      iconImage={facebookIcon}
                      iconName="facebook"
                    />
                  </IconItem>
                </IconList>
              </ContactInfo>
            </SectionLeft>
            <SectionRight>
              <ContactForm />
            </SectionRight>
          </SectionWrapper>
        </Section>
      </Layout>
    </>
  );
};

export default Contact;

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

  @media screen and (max-width: 900px) {
    padding: 0px 0px;
    grid-template: 1fr / 1fr;
  }
`;

const SectionLeft = styled.div`
  padding: 16px;
  background-color: var(--neut-light);

  @media screen and (max-width: 900px) {
    padding: 0 12px;
  }
`;

const SectionRight = styled.div`
  padding: 16px;
  background-color: var(--neut-darkest);
`;

const ContactInfo = styled.div`
  z-index: 5;
`;

const ContactLabel = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  color: var(--body-dark);

  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

const ContactText = styled.p`
  font-size: 20px;
  margin: 16px 0 32px 0;
  color: var(--body-dark);

  @media screen and (max-width: 500px) {
    font-size: 16px;
    margin: 8px 0 24px 0;
  }
`;

const IconList = styled.ul`
  list-style: none;
  padding: 0px;
  display: grid;
  justify-items: left;
  grid-template: 1fr / repeat(4, 60px);
  margin-left: 0;
`;

const IconItem = styled.li`
  margin: 12px 8px;
  font-size: 16px;
  background-color: var(--body-dark);
  padding: 8px;
`;
