import React from "react";
import styled from "styled-components";
import { Link, useStaticQuery, graphql } from "gatsby";
import SocialIcon from "./social-icon";
import facebookIcon from "../../images/icon-facebook.svg";
import twitterIcon from "../../images/icon-twitter.svg";
import instagramIcon from "../../images/icon-insta.svg";
import youtubeIcon from "../../images/icon-youtube.svg";
import Nav from "./nav";

// Layout
const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          youtube
          instagram
          twitter
          facebook
        }
      }
    }
  `);

  return (
    <HeaderWrapper>
      <HeaderTop>
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
              iconLink={data.site.siteMetadata.youtube}
              iconImage={youtubeIcon}
              iconName="youtube"
            />
            <SocialIcon
              iconLink={data.site.siteMetadata.instagram}
              iconImage={instagramIcon}
              iconName="instagram"
            />
            <SocialIcon
              iconLink={data.site.siteMetadata.twitter}
              iconImage={twitterIcon}
              iconName="twitter"
            />
            <SocialIcon
              iconLink={data.site.siteMetadata.facebook}
              iconImage={facebookIcon}
              iconName="facebook"
            />
          </SocialIconsWrapper>
        </HeaderRight>
      </HeaderTop>
      <Nav />
    </HeaderWrapper>
  );
};

export default Header;

// Styles
const HeaderWrapper = styled.header`
  display: grid;
  grid-template-rows: 96px 64px;
  align-items: center;
  color: var(--neut-lightest);
  background-color: var(--neut-darkest);

  @media screen and (max-width: 500px) {
    grid-template-rows: 64px 55px;
  }
`;

const HeaderTop = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 1440px;
  margin: auto;

  @media (max-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const HeaderLeft = styled.div`
  grid-column: 1 / 2;
  padding-left: 16px;

  @media (max-width: 500px) {
    padding-left: 4px;
  }
`;

// Logo
const StyledLink = styled(props => <Link {...props} />)`
  text-decoration: none;
  color: var(--red-base);
  text-shadow: 2px 2px 2px var(--red-darkest);
  font-size: 48px;
  font-style: italic;
  font-family: "Nunito", "sans-serif";
  font-weight: 400;
  text-transform: uppercase;

  @media screen and (max-width: 500px) {
    font-size: 30px;
  }
`;

const HeaderRight = styled.div`
  grid-column: 2 / -1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-right: 16px;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    padding-right: 4px;
  }
`;

const CallInfoWrapper = styled.div`
  display: grid;
  justify-items: left;
  align-items: center;
  padding-right: 16px;

  @media screen and (max-width: 500px) {
    justify-items: right;
    padding-right: 0px;
  }
`;

const CallInfoTop = styled.p`
  font-size: 12px;
  text-transform: uppercase;
  margin: 0;
  opacity: 0.75;
  color: var(--red-light);
`;

const CallInfoBottom = styled.p`
  font-size: 20px;
  margin: 0;

  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

const SocialIconsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  grid-gap: 16px;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;
