import React from "react";
import styled from "styled-components";

const Footer = () => (
  <Section>
    <FooterText>&#9400; Copyright 2019. All rights reserved.</FooterText>
    <FooterText>
      Hosted and Managed by{" "}
      <ExternalLink
        href="https://www.jordanwalker.dev"
        target="_blank"
        rel="noreferrer noopener"
      >
        jwalkercreations
      </ExternalLink>
    </FooterText>
  </Section>
);

export default Footer;

const Section = styled.footer`
  background: var(--neut-darkest);
  color: var(--body-light);
  display: grid;
  grid-template-rows: auto auto;
  padding: 16px;
`;

const FooterText = styled.p`
  text-align: center;
  font-size: 16px;
  margin-bottom: 0;
  padding: 4px 0;

  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;

const ExternalLink = styled.a`
  color: var(--red-base);
  text-decoration: none;
`;
