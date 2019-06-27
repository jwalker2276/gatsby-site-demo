import React from "react";
import styled from "styled-components";
import { Link, graphql, useStaticQuery } from "gatsby";
import Icon from "./social-icon";
import facebookIcon from "../../images/icon-facebook.svg";
import twitterIcon from "../../images/icon-twitter.svg";
import instagramIcon from "../../images/icon-insta.svg";
import youtubeIcon from "../../images/icon-youtube.svg";
import mailIcon from "../../images/icon-mail.svg";
import phoneIcon from "../../images/icon-phone-ring.svg";
import addressIcon from "../../images/icon-location-pin.svg";

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
          <ListItem>
            <ListItemIcon src={mailIcon} alt="email icon" />
            {email}
          </ListItem>
          <ListItem>
            <ListItemIcon src={phoneIcon} alt="phone icon" />
            {phone}
          </ListItem>
          <ListItem>
            <ListItemIcon src={addressIcon} alt="address icon" />
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
  padding: 48px 16px;
  background-color: #909090;
  background-image: url("data:image/svg+xml,%3Csvg width='44' height='12' viewBox='0 0 44 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 12v-2L0 0v10l4 2h16zm18 0l4-2V0L22 10v2h16zM20 0v8L4 0h16zm18 0L22 8V0h16z' fill='%23000000' fill-opacity='0.06' fill-rule='evenodd'/%3E%3C/svg%3E");
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
  font-size: 30px;
  margin-top: 0;
`;

const ListTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
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

const ListItemIcon = styled.img`
  width: 16px;
  margin-right: 16px;
`;

const ListItem = styled.li`
  margin: 12px 0;
  font-size: 16px;
`;

const Text = styled.p`
  font-size: 16px;
`;

const StyledNavLink = styled(props => <Link {...props} />)`
  font-size: 16px;
  color: black;
  text-decoration: underline;
`;
