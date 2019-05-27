import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import SocialIcon from "./social-icon";
import facebookIcon from "../images/icon-facebook.svg";
import twitterIcon from "../images/icon-twitter.svg";
import instagramIcon from "../images/icon-insta.svg";
import youtubeIcon from "../images/icon-youtube.svg";
import Nav from "../components/nav";

// Styles
const HeaderWrapper = styled.header`
  display: grid;
  grid-template-columns: 1fr 40%;
  align-items: center;
  background-color: black;
  height: 100px;
`;

const HeaderLeft = styled.div`
  grid-column: 1 / 2;
  padding-left: 16px;
`;

// Logo
const StyledLink = styled(props => <Link {...props} />)`
  text-decoration: none;
  color: red;
  font-size: 42px;
  font-style: italic;
  text-transform: uppercase;
`;

const HeaderRight = styled.div`
  grid-column: 2 / -1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-right: 16px;
`;

const CallInfoWrapper = styled.div`
  display: grid;
  justify-items: left;
  align-items: center;
`;

const CallInfoTop = styled.p`
  font-size: 14px;
  text-transform: uppercase;
  margin: 0;
  color: white;
`;

const CallInfoBottom = styled.p`
  font-size: 24px;
  margin: 0;
  color: white;
`;

const SocialIconsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  grid-gap: 10px;
`;

// Layout
const Header = () => (
  <HeaderWrapper>
    <HeaderLeft>
      <StyledLink to="/">Downshift</StyledLink>
    </HeaderLeft>
    <HeaderRight>
      <CallInfoWrapper>
        <CallInfoTop>Call Now</CallInfoTop>
        <CallInfoBottom>1-895-331-4517</CallInfoBottom>
      </CallInfoWrapper>
      <SocialIconsWrapper>
        <SocialIcon
          iconLink="https://www.youtube.com"
          iconImage={youtubeIcon}
          iconName="youtube"
        />
        <SocialIcon
          iconLink="https://www.instagram.com"
          iconImage={instagramIcon}
          iconName="instagram"
        />
        <SocialIcon
          iconLink="https://www.twitter.com"
          iconImage={twitterIcon}
          iconName="twitter"
        />
        <SocialIcon
          iconLink="https://www.facebook.com"
          iconImage={facebookIcon}
          iconName="facebook"
        />
      </SocialIconsWrapper>
    </HeaderRight>
    <Nav />
  </HeaderWrapper>
);

export default Header;

// Props Types
Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};
