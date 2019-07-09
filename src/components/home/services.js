import React from "react";
import styled from "styled-components";
import ServiceCard from "./service-card";
import engineImg from "../../images/engine2.jpg";
import tuningImg from "../../images/tuning.jpg";
import brakesImg from "../../images/brakes.jpg";
import suspensionImg from "../../images/suspension.jpg";
import iconEngine from "../../images/icon-engine.svg";
import iconCar from "../../images/icon-car.svg";
import iconWheel from "../../images/icon-wheel.svg";
import iconChassis from "../../images/icon-chassis.svg";
import { Link } from "gatsby";

// Data
const servicesInfo = [
  {
    ImgSrc: engineImg,
    Icon: iconEngine,
    Alt: "Engine",
    Heading: "Engines",
    Text: "Custom built engines",
    ButtonText: "Schedule",
  },
  {
    ImgSrc: tuningImg,
    Icon: iconCar,
    Alt: "Tuning",
    Heading: "Tuning",
    Text: "Tuned for maximun power",
    ButtonText: "Schedule",
  },
  {
    ImgSrc: brakesImg,
    Icon: iconWheel,
    Alt: "Brakes",
    Heading: "Brakes",
    Text: "Stop quicker",
    ButtonText: "Schedule",
  },
  {
    ImgSrc: suspensionImg,
    Icon: iconChassis,
    Alt: "Suspension",
    Heading: "Suspension",
    Text: "Raise, lower, firm up or soften",
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
    <StyledNavLink to="/services">See all services</StyledNavLink>
  </Section>
);

export default Services;

const Section = styled.section`
  display: grid;
  grid-template: auto auto auto / 1fr;
  background-color: var(--neut-lightest);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%239C92AC' fill-opacity='0.15' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
`;

const SectionHeading = styled.h1`
  font-size: 48px;
  text-align: center;
  margin: 64px;
  text-transform: uppercase;
  color: var(--heading-dark);
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template: 1fr / repeat(4, 1fr);
  grid-gap: 16px;
  justify-items: center;
  padding: 0 16px;
  width: 100%;
  margin: 0 auto 64px auto;
  max-width: 1440px;

  @media screen and (max-width: 960px) {
    grid-template: repeat(4, 1fr) / 1fr;
    grid-row-gap: 32px;
  }
`;

const StyledNavLink = styled(props => <Link {...props} />)`
  justify-self: center;
  font-size: 18px;
  color: var(--red-dark);
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  padding: 16px 0px;
  background: rgba(0, 0, 0, 0);
  border-radius: 10px;
  border: 2px solid var(--red-dark);
  width: 200px;
  margin: 32px auto 96px auto;
  box-shadow: 2px 3px 2px 0px var(--shadow), 2px 8px 10px 0px var(--shadow);
  transition: box-shadow 0.1s ease-in, transform 0.1s ease-in,
    background-color 0.1s ease-in, border-color 0.1s ease-in, color 0.1s ease-in;

  :hover {
    background: var(--red-dark);
    border-color: var(--red-base);
    color: var(--body-light);
    box-shadow: 2px 8px 2px 0px var(--shadow), 2px 8px 15px 0px var(--shadow);
    transform: translate(0px, -2px);
  }
`;
