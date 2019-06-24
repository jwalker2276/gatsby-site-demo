import React from "react";
import styled from "styled-components";

const SocialIcon = props => (
  <IconLink href={props.iconLink} target="_blank" rel="noreferrer noopener">
    <IconImage src={props.iconImage} alt={`Link to ${props.iconName}`} />
  </IconLink>
);

export default SocialIcon;

const IconLink = styled.a`
  text-decoration: none;
`;

const IconImage = styled.img`
  width: 32px;
  margin: 0;
`;
