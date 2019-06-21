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
    Heading: "Engines",
    Text: "We build it to your needs.",
    ButtonText: "Schedule",
  },
  {
    ImgSrc: tuningImg,
    Alt: "Tuning",
    Heading: "Tuning",
    Text: "We tune your vehice for maximun power.",
    ButtonText: "Schedule",
  },
  {
    ImgSrc: brakesImg,
    Alt: "Brakes",
    Heading: "Brakes",
    Text: "Our experts install the brake you need to stop quickly.",
    ButtonText: "Schedule",
  },
  {
    ImgSrc: suspensionImg,
    Alt: "Suspension",
    Heading: "Suspension",
    Text: "We can raise, lower, firm up or soften your suspension.",
    ButtonText: "Schedule",
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
    <StyledNavLink to="/services">See all of our services</StyledNavLink>
  </Section>
);

export default Services;

const Section = styled.section`
  display: grid;
  grid-template: auto auto auto / 1fr;
  margin: 0 10px;
`;

const SectionHeading = styled.h1`
  font-size: 30px;
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
  justify-self: center;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  padding: 15px 15px;
  margin: 15px 0;
  background: black;
  border-radius: 10px;
  font-size: 18px;
`;
