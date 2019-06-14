import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import ServiceCard from "./service-card";
import engineImg from "../../images/engine2.jpg";
import tuningImg from "../../images/tuning.jpg";
import brakesImg from "../../images/brakes.jpg";
import suspensionImg from "../../images/suspension.jpg";

// Data
const servicesInfo = [
  {
    ImgSrc: engineImg,
    Alt: "Engine",
    Heading: "Custom Engines",
    Text: "We build it to your needs.",
    ButtonText: "Schedule Engine Work",
  },
  {
    ImgSrc: tuningImg,
    Alt: "Tuning",
    Heading: "Tuning",
    Text: "We tune your vehice for maximun power.",
    ButtonText: "Schedule Dyno Time",
  },
  {
    ImgSrc: brakesImg,
    Alt: "Brakes",
    Heading: "Custom Brakes",
    Text: "Our experts install the brake you need to stop quickly.",
    ButtonText: "Schedule New Brakes",
  },
  {
    ImgSrc: suspensionImg,
    Alt: "Suspension",
    Heading: "Custom Suspension",
    Text:
      "We can raise, lower, or firm up your suspension to keep the power under control.",
    ButtonText: "Schedule New Suspension",
  },
];

const Services = () => (
  <Section>
    <SectionHeading>Popular Services We Offer</SectionHeading>
    <CardsWrapper>
      {servicesInfo.map(serviceData => (
        <ServiceCard key={serviceData.Heading} data={serviceData} />
      ))}
    </CardsWrapper>
    <StyledNavLink to="/services">
      Click here for all of our services
    </StyledNavLink>
  </Section>
);

export default Services;

const Section = styled.section``;

const SectionHeading = styled.h1`
  font-size: 28px;
  text-align: center;
  margin: 36px;
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template: 1fr / repeat(4, 1fr);
  grid-gap: 10px;
  justify-items: center;
`;

const StyledNavLink = styled(props => <Link {...props} />)`
  font-size: 16px;
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
`;
