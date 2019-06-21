import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const ServiceCard = ({ data }) => (
  <CardWrapper>
    <CardImage src={data.ImgSrc} alt={data.Alt} />
    <CardInner>
      <CardTitle>{data.Heading}</CardTitle>
      <CardDesc>{data.Text}</CardDesc>
      <StyledNavLink to="/contact">{data.ButtonText}</StyledNavLink>
    </CardInner>
  </CardWrapper>
);

const CardWrapper = styled.div`
  display: grid;
  grid-template: 150px auto / 250px;
  justify-items: center;
`;

const CardImage = styled.img`
  width: 250px;
  border-radius: 0px;
`;

const CardInner = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  background-color: white;
  grid-template: auto 100px 75px / 235px;
  box-shadow: 0px 2px 3px 1px rgba(0, 0, 0, 0.25);
  transform: translateY(-50px);
  z-index: 10;
  border-radius: 0px;
`;

const CardTitle = styled.h2`
  font-size: 24px;
  text-align: center;
  margin: 10px 0;
`;

const CardDesc = styled.p`
  font-size: 18px;
  text-align: center;
  margin: 0 10px;
`;

const StyledNavLink = styled(props => <Link {...props} />)`
  align-self: center;
  font-size: 18px;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  padding: 15px 0px;
  background: black;
  border-radius: 10px;
  width: 200px;
`;

export default ServiceCard;
