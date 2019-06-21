import React from "react";
import styled from "styled-components";
import { Link, graphql, useStaticQuery } from "gatsby";
import Icon from "./social-icon";
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
      <GeneralInfo>
        <SiteTitle>Downshift</SiteTitle>
        <Text>Make driving fun again</Text>
      </GeneralInfo>
      <ContactInfo>
        <ListTitle>Contact</ListTitle>
        <List>
          <ListItem>{email}</ListItem>
          <ListItem>{phone}</ListItem>
          <ListItem>{address}</ListItem>
        </List>
      </ContactInfo>
      <SiteInfo>
        <ListTitle>Site map</ListTitle>
        <List>
          <ListItem>
            <StyledNavLink to="/">Home</StyledNavLink>
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
    </Section>
  );
};

export default BottomNav;

const Section = styled.section`
  display: grid;
  grid-template: 1fr / repeat(4, 1fr);
  margin: 10px;
  padding: 10px;
`;

const GeneralInfo = styled.div`
  grid-column: 1 / 2;
`;

const ContactInfo = styled.div`
  grid-column: 2 / 3;
`;

const SiteInfo = styled.div`
  grid-column: 3 / 4;
`;

const SocialInfo = styled.div`
  grid-column: 4 / -1;
`;

const SiteTitle = styled.h1`
  font-size: 24px;
`;

const ListTitle = styled.h2`
  font-size: 18px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0px;
`;

const IconList = styled.ul`
  list-style: none;
  padding: 0px;
  display: grid;
  grid-template: 1fr / repeat(4, 1fr);
`;

const ListItem = styled.li`
  margin: 5px 0;
  font-size: 16px;
`;

const Text = styled.p`
  font-size: 16px;
`;

const StyledNavLink = styled(props => <Link {...props} />)`
  font-size: 16px;
  color: black;
  text-decoration: none;
  text-transform: uppercase;
`;
