import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const ServiceCard = ({ data }) => (
  <CardWrapper>
    <CardImage src={data.ImgSrc} alt={data.Alt} />
    <CardInner>
      <CardIcon src={data.Icon} alt="Service Icon" />
      <CardTitle>{data.Heading}</CardTitle>
      <CardDesc>{data.Text}</CardDesc>
      <StyledNavLink to="/contact">{data.ButtonText}</StyledNavLink>
    </CardInner>
  </CardWrapper>
);

const CardWrapper = styled.div`
  display: grid;
  grid-template: 150px auto / auto;
  justify-items: center;
`;

const CardImage = styled.img`
  width: 100%;
  border-radius: 5px;
`;

const CardInner = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  background-color: var(--neut-lightest);
  grid-template: repeat(4, auto) / 310px;
  box-shadow: 0px 2px 3px 1px rgba(0, 0, 0, 0.25);
  transform: translateY(-5px);
  z-index: 10;
  border-radius: 5px;
  box-shadow: 2px 3px 2px 0px var(--shadow), 2px 8px 10px 0px var(--shadow);
`;

const CardIcon = styled.img`
  width: 80px;
  margin: 16px 0;
`;

const CardTitle = styled.h2`
  font-size: 32px;
  text-align: center;
  margin: 0;
  color: var(--heading-dark);
`;

const CardDesc = styled.p`
  font-size: 18px;
  text-align: center;
  margin: 32px 0;
  color: var(--body-dark);
`;

const StyledNavLink = styled(props => <Link {...props} />)`
  align-self: center;
  font-size: 18px;
  color: var(--body-light);
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  padding: 16px 0px;
  background: var(--red-dark);
  border-radius: 10px;
  border: 2px solid var(--red-base);
  width: 200px;
  margin-bottom: 32px;
  box-shadow: 2px 3px 2px 0px var(--shadow), 2px 8px 10px 0px var(--shadow);
  transition: box-shadow 0.1s ease-in, transform 0.1s ease-in;

  :hover {
    box-shadow: 2px 8px 2px 0px var(--shadow), 2px 8px 15px 0px var(--shadow);
    transform: translate(0px, -2px);
  }
`;

export default ServiceCard;
