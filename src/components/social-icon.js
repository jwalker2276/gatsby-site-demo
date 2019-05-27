import React from "react";
import styled from "styled-components";

const IconLink = styled.a`
  text-decoration: none;
`;

const IconImage = styled.img`
  width: 40px;
`;

const SocialIcon = props => (
  <IconLink href={props.iconLink} target="_blank" rel="noreferrer noopener">
    <IconImage src={props.iconImage} alt={`Link to ${props.iconName}`} />
  </IconLink>
);

export default SocialIcon;
