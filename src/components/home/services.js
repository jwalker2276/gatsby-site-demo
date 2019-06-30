import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import ServiceCard from "./service-card";
import engineImg from "../../images/engine2.jpg";
import tuningImg from "../../images/tuning.jpg";
import brakesImg from "../../images/brakes.jpg";
import suspensionImg from "../../images/suspension.jpg";
import iconEngine from "../../images/icon-engine.svg";
import iconCar from "../../images/icon-car.svg";
import iconChassis from "../../images/icon-chassis.svg";
import iconWheel from "../../images/icon-wheel.svg";

// Data
const servicesInfo = [
  {
    ImgSrc: engineImg,
    Icon: iconEngine,
    Alt: "Engine",
    Heading: "Engines",
    Text: "Custom build engines",
    ButtonText: "Schedule",
  },
  {
    ImgSrc: tuningImg,
    Icon: iconCar,
    Alt: "Tuning",
    Heading: "Tuning",
    Text: "Tune for maximun power",
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
    <StyledNavLink to="/services">See all of our services</StyledNavLink>
  </Section>
);

export default Services;

const Section = styled.section`
  display: grid;
  grid-template: auto auto auto / 1fr;
  background-color: gray;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%239C92AC' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
`;

const SectionHeading = styled.h1`
  font-size: 36px;
  text-align: center;
  margin: 36px;
  text-transform: uppercase;
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template: 1fr / repeat(4, 1fr);
  grid-gap: 16px;
  justify-items: center;
  padding: 0 16px;
`;

const StyledNavLink = styled(props => <Link {...props} />)`
  justify-self: center;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  padding: 16px 16px;
  margin: 48px 0 48px 0;
  background: black;
  border-radius: 10px;
  font-size: 18px;
`;
