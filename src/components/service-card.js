import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledNavLink = styled(props => <Link {...props} />)`
  font-size: 16px;
  color: black;
  text-decoration: none;
  text-transform: uppercase;
`;

const ServiceCard = ({ data }) => (
  <div>
    <h1>{data.Heading}</h1>
    <p>{data.Text}</p>
    <StyledNavLink to="/contact">{data.ButtonText}</StyledNavLink>
  </div>
);

export default ServiceCard;
