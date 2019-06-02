import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const ServiceCard = ({ data }) => (
  <CardWrapper>
    <CardImage src={data.ImgSrc} alt={data.Alt} />
    <CardTitle>{data.Heading}</CardTitle>
    <CardDesc>{data.Text}</CardDesc>
    <StyledNavLink to="/contact">{data.ButtonText}</StyledNavLink>
  </CardWrapper>
);

const CardWrapper = styled.div`
  display: grid;
  grid-template: auto auto auto auto / 250px;
  background: gray;
`;

const CardImage = styled.img`
  width: 250px;
`;

const CardTitle = styled.h2`
  text-align: center;
  margin: 10px 0;
`;

const CardDesc = styled.p`
  text-align: center;
  margin: 10px 0;
`;

const StyledNavLink = styled(props => <Link {...props} />)`
  font-size: 16px;
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
`;

export default ServiceCard;
