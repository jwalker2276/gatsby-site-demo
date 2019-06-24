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
  background: black;
  color: white;
  display: grid;
  grid-template-rows: auto auto;
`;

const FooterText = styled.p`
  text-align: center;
  font-size: 14px;
  margin-bottom: 0;
  padding: 7px 0;
  width: 100%;
`;

const ExternalLink = styled.a`
  color: red;
  text-decoration: none;
`;
