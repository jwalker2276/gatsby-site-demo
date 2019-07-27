import React from "react";
import styled from "styled-components";
import { Link, graphql, useStaticQuery } from "gatsby";
import Icon from "./social-icon";
import { EmailIcon, PhoneIcon, LocationIcon } from "./icons";
import facebookIcon from "../../images/icon-facebook.svg";
import twitterIcon from "../../images/icon-twitter.svg";
import instagramIcon from "../../images/icon-insta.svg";
import youtubeIcon from "../../images/icon-youtube.svg";

const BottomNav = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          phone
          email
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
    phone,
    email,
    address,
    youtube,
    instagram,
    twitter,
    facebook,
  } = data.site.siteMetadata;

  return (
    <Section>
      <SectionWrapper>
        <GeneralInfo>
          <SiteTitle>Downshift</SiteTitle>
          <Text>Make driving fun again</Text>
        </GeneralInfo>
        <ContactInfo>
          <ListTitle>Contact</ListTitle>
          <List>
            <ListItem>
              <EmailIcon width="15px" color="hsl(4,77%,48%)" />
              {email}
            </ListItem>
            <ListItem>
              <PhoneIcon width="15px" color="hsl(4,77%,48%)" />
              {phone}
            </ListItem>
            <ListItem>
              <LocationIcon width="15px" color="hsl(4,77%,48%)" />
              {address}
            </ListItem>
          </List>
        </ContactInfo>
        <SiteInfo>
          <ListTitle>Site map</ListTitle>
          <List>
            <ListItem>
              <StyledNavLink to="/">Home</StyledNavLink>
            </ListItem>
            <ListItem>
              <StyledNavLink to="/services">Services</StyledNavLink>
            </ListItem>
            <ListItem>
              <StyledNavLink to="/about">About</StyledNavLink>
            </ListItem>
            <ListItem>
              <StyledNavLink to="/cars">Cars and Projects</StyledNavLink>
            </ListItem>
            <ListItem>
              <StyledNavLink to="/contact">Contact</StyledNavLink>
            </ListItem>
          </List>
        </SiteInfo>
        <SocialInfo>
          <ListTitle>Connect with us</ListTitle>
          <IconList>
            <ListItem>
              <Icon
                iconLink={youtube}
                iconImage={youtubeIcon}
                iconName="youtube"
              />
            </ListItem>
            <ListItem>
              <Icon
                iconLink={instagram}
                iconImage={instagramIcon}
                iconName="instagram"
              />
            </ListItem>
            <ListItem>
              <Icon
                iconLink={twitter}
                iconImage={twitterIcon}
                iconName="twitter"
              />
            </ListItem>
            <ListItem>
              <Icon
                iconLink={facebook}
                iconImage={facebookIcon}
                iconName="facebook"
              />
            </ListItem>
          </IconList>
        </SocialInfo>
      </SectionWrapper>
    </Section>
  );
};

export default BottomNav;

const Section = styled.section`
  color: var(--body-light);
  background-color: var(--neut-dark);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%239C92AC' fill-opacity='0.1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
`;

const SectionWrapper = styled.div`
  display: grid;
  grid-template: 1fr / repeat(4, 1fr);
  padding: 48px 16px;
  width: 100%;
  max-width: 1440px;
  margin: auto;

  @media screen and (max-width: 800px) {
    padding: 36px 4px;
    grid-template: repeat(4, auto) / 1fr auto 1fr;
  }
`;

const GeneralInfo = styled.div`
  grid-column: 1 / 2;

  @media screen and (max-width: 800px) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    padding-bottom: 36px;
    text-align: center;
  }
`;

const ContactInfo = styled.div`
  grid-column: 2 / 3;

  @media screen and (max-width: 800px) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    padding-bottom: 36px;
    text-align: center;
  }
`;

const SiteInfo = styled.div`
  grid-column: 3 / 4;

  @media screen and (max-width: 800px) {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    padding-bottom: 36px;
    text-align: center;
  }
`;

const SocialInfo = styled.div`
  grid-column: 4 / -1;

  @media screen and (max-width: 800px) {
    grid-column: 2 / 3;
    grid-row: 4 / -1;
    text-align: center;
  }
`;

const SiteTitle = styled.h1`
  font-size: 30px;
  margin-top: 0;
  color: var(--red-base);
`;

const ListTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
  color: var(--body-light);
`;

const List = styled.ul`
  list-style: none;
  padding: 0px;
  margin-left: 0;
  margin-bottom: 0;
`;

const IconList = styled.ul`
  list-style: none;
  padding: 0px;
  display: grid;
  grid-template: 1fr / repeat(4, 1fr);
  margin-left: 0;
`;

const ListItem = styled.li`
  margin: 12px 0;
  font-size: 16px;
`;

const Text = styled.p`
  font-size: 16px;
  color: var(--body-light);
`;

const StyledNavLink = styled(props => <Link {...props} />)`
  font-size: 16px;
  color: var(--neut-lightest);
  text-decoration: underline var(--red-base);
`;
