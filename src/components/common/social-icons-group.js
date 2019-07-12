import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import SocialIcon from "./social-icon";
import facebookIcon from "../../images/icon-facebook.svg";
import twitterIcon from "../../images/icon-twitter.svg";
import instagramIcon from "../../images/icon-insta.svg";
import youtubeIcon from "../../images/icon-youtube.svg";

// Layout
const SocialIconGroup = () => {
  const data = useStaticQuery(graphql`
    query IconQuery {
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
  );
};

export default SocialIconGroup;

const SocialIconsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  grid-gap: 16px;

  @media screen and (max-width: 500px) {
    justify-items: left;
    grid-gap: 4px;
  }
`;
