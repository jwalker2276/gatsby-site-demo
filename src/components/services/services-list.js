import React from "react";
import styled from "styled-components";
import ServiceItem from "./service-listitem";
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
    Text: "Custom built engines built for your power requirements.",
    ButtonText: "Schedule",
  },
  {
    ImgSrc: tuningImg,
    Alt: "Tuning",
    Heading: "Tuning",
    Text: "Tuned for maximun power for the street or the track.",
    ButtonText: "Schedule",
  },
  {
    ImgSrc: brakesImg,
    Alt: "Brakes",
    Heading: "Brakes",
    Text:
      "More power means more speed. Upgrade your brakes so you can stop that beast.",
    ButtonText: "Schedule",
  },
  {
    ImgSrc: suspensionImg,
    Alt: "Suspension",
    Heading: "Suspension",
    Text:
      "Upgrade your suspension to keep the power on the ground and take faster turns.",
    ButtonText: "Schedule",
  },
];

const ServiceList = () => (
  <List>
    {servicesInfo.map(serviceData => (
      <ServiceItem data={serviceData} key={serviceData.Heading} />
    ))}
  </List>
);

export default ServiceList;

const List = styled.ul`
  margin: 0;
  padding: 16px 0 0 0;
  list-style: none;
  border-top: 2px solid var(--shadow);
  border-bottom: 2px solid var(--shadow);

  @media screen and (max-width: 500px) {
    margin: 0 0 16px 0;
    padding: 16px 0 0 0;
  }
`;
