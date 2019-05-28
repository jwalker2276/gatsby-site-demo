import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import ServiceCard from "../components/service-card";

const servicesInfo = [
  {
    Heading: "Custom Engines",
    Text: "We build it to your needs.",
    ButtonText: "Schedule Engine Work",
  },
  {
    Heading: "Tuning",
    Text: "We tune your vehice for maximun power.",
    ButtonText: "Schedule Dyno Time",
  },
  {
    Heading: "Custom Brakes",
    Text: "Our experts install the brake you need to stop quickly.",
    ButtonText: "Schedule New Brakes",
  },
  {
    Heading: "Custom Suspension",
    Text:
      "We can raise, lower, or firm up your suspension to keep the power under control.",
    ButtonText: "Schedule New Suspension",
  },
];

const StyledNavLink = styled(props => <Link {...props} />)`
  font-size: 16px;
  color: black;
  text-decoration: none;
  text-transform: uppercase;
`;

const ServicesSmall = () => (
  <div>
    <h1>Popular Services We Offer</h1>
    {servicesInfo.map(serviceData => (
      <ServiceCard key={serviceData.Heading} data={serviceData} />
    ))}
    <StyledNavLink to="/services">
      Click here for all of our services
    </StyledNavLink>
  </div>
);

export default ServicesSmall;
