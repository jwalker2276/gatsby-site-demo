import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const ServiceCard = ({ data }) => (
  <CardWrapper>
    <CardImage src={data.ImgSrc} alt={data.Alt} />
    <CardInner image={data.ImgSrc}>
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

  @media screen and (max-width: 960px) {
    grid-template: auto / 1fr 3fr;
    align-items: center;
    background-color: var(--neut-lighter);
    box-shadow: 1px 3px 2px 2px var(--shadow), 1px 2px 10px 2px var(--shadow);
    border-radius: 5px;
    margin: 0 16px;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    grid-template: auto / 1fr;
    border-radius: 5px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  border-radius: 5px;

  @media screen and (max-width: 960px) {
    margin-bottom: 0;
    border-top-left-radius: 5px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 5px;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const CardInner = styled.div`
  display: grid;
  border-radius: 5px;
  align-items: center;
  justify-items: center;
  background-color: var(--neut-lightest);
  grid-template: repeat(4, auto) / 310px;
  transform: translateY(-5px);
  z-index: 10;
  box-shadow: 2px 3px 2px 0px var(--shadow), 2px 8px 10px 0px var(--shadow);

  @media screen and (max-width: 1360px) {
    grid-template: repeat(4, auto) / 21vw;
    transform: translateY(-25px);
  }

  @media screen and (max-width: 1060px) {
    transform: translateY(-45px);
  }

  @media screen and (max-width: 960px) {
    background-color: rgba(0, 0, 0, 0);
    grid-template: auto auto / auto auto;
    transform: translateY(0);
    justify-items: left;
    width: 100%;
    height: 100%;
    padding: 16px 0 16px 16px;
    box-shadow: none;
  }

  @media screen and (max-width: 500px) {
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
      url(${props => props.image});
    background-size: cover;
    padding: 16px 0 16px 8px;
  }
`;

const CardIcon = styled.img`
  width: 80px;
  margin: 16px 0;

  @media screen and (max-width: 1060px) {
    width: 60px;
  }

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const CardTitle = styled.h2`
  font-size: 32px;
  text-align: center;
  margin: 0;
  color: var(--heading-dark);

  @media screen and (max-width: 1320px) {
    font-size: 30px;
  }

  @media screen and (max-width: 960px) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  @media screen and (max-width: 700px) {
    font-size: 24px;
  }

  @media screen and (max-width: 500px) {
    color: var(--body-light);
  }
`;

const CardDesc = styled.p`
  font-size: 18px;
  text-align: center;
  margin: 32px 0;
  color: var(--body-dark);

  @media screen and (max-width: 1320px) {
    font-size: 16px;
  }

  @media screen and (max-width: 1160px) {
    font-size: 14px;
  }

  @media screen and (max-width: 960px) {
    grid-column: 1 / 2;
    grid-row: 2 / -1;
    margin: 0;
  }

  @media screen and (max-width: 500px) {
    grid-column: 1 / 2;
    grid-row: 2 / -1;
    margin-top: 16px;
    text-align: left;
    color: var(--body-light);
  }
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
  width: 175px;
  margin-bottom: 32px;
  box-shadow: 2px 3px 2px 0px var(--shadow), 2px 8px 10px 0px var(--shadow);
  transition: box-shadow 0.1s ease-in, transform 0.1s ease-in;

  :hover {
    box-shadow: 2px 8px 2px 0px var(--shadow), 2px 8px 15px 0px var(--shadow);
    transform: translate(0px, -2px);
  }

  @media screen and (max-width: 1160px) {
    font-size: 16px;
    padding: 12px 0px;
    width: 150px;
  }

  @media screen and (max-width: 960px) {
    grid-column: 2 / -1;
    grid-row: 1 / -1;
    margin-bottom: 0;
    justify-self: right;
    margin-right: 16px;
    font-size: 14px;
    padding: 12px 0;
    width: 115px;
  }

  @media screen and (max-width: 500px) {
    margin-right: 8px;
  }
`;

export default ServiceCard;
