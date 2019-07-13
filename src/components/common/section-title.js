import React from "react";
import styled from "styled-components";

const SectionTitle = ({ titleText, isDark = true }) => {
  if (isDark) {
    return <StyledHeading>{titleText}</StyledHeading>;
  } else {
    return <StyledHeadingLight>{titleText}</StyledHeadingLight>;
  }
};

export default SectionTitle;

const StyledHeading = styled.h1`
  font-size: 48px;
  margin: 16px 0 32px 0;
  text-transform: uppercase;
  color: var(--heading-dark);

  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

const StyledHeadingLight = styled(StyledHeading)`
  color: var(--heading-light);
  text-shadow: 1px 1px 2px var(--neut-darkest);
`;
