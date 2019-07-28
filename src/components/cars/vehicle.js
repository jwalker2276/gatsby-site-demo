import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Vehicle = ({ vehicleData }) => {
  const {
    _id,
    vehicle_id,
    seller_id,
    year,
    make,
    model,
    trim,
    price,
    mileage,
    fuelType,
    transmission,
    drivetrain,
    exteriorColor,
    interiorColor,
    shopNotes,
    dynoSpecs_HP,
    dynoSpecs_T,
    image,
    isSold,
    isConsignment,
    views,
    creationDate,
  } = vehicleData;

  return (
    <CardWrapper>
      <CardTop>
        <CardImg src={image} alt={model} />
      </CardTop>
      <CardBottom>
        {isConsignment === "false" && (
          <BuildInHouseBanner>
            <BannerText>Improved In House</BannerText>
          </BuildInHouseBanner>
        )}
        <Price>${price}</Price>
        <MainInfoWrapper>
          <SpanInfo>{year}</SpanInfo>
          <SpanInfo>{make}</SpanInfo>
          <SpanInfo>{model}</SpanInfo>
          <SpanInfo>{trim}</SpanInfo>
        </MainInfoWrapper>
        <GeneralInfoWrapper>
          <InfoLeft>
            <GeneralText>{mileage} miles</GeneralText>
            <GeneralText>Transmission: {transmission}</GeneralText>
            <GeneralText>Drivetrain: {drivetrain}</GeneralText>
          </InfoLeft>
          <InfoRight>
            <GeneralText>Fuel Type: {fuelType}</GeneralText>
            <GeneralText>Ext. Color: {exteriorColor}</GeneralText>
            <GeneralText>Int. Color: {interiorColor}</GeneralText>
          </InfoRight>
        </GeneralInfoWrapper>
        <HorsePowerText>
          Power: <HighlightedText>{dynoSpecs_HP}</HighlightedText> hp /{" "}
          <HighlightedText> {dynoSpecs_T} </HighlightedText> lb-ft
        </HorsePowerText>
        <StyledNavLink to="/contact">Check Availability</StyledNavLink>
        <SmallHeading>About</SmallHeading>
        <div>
          <DescriptionBox>{shopNotes}</DescriptionBox>
        </div>
        {/* <p>{views}</p> */}
        <GeneralText>Date Added : {creationDate}</GeneralText>
      </CardBottom>
    </CardWrapper>
  );
};

export default Vehicle;

// Styled Components

const CardWrapper = styled.div`
  display: grid;
  justify-items: center;
`;

const CardTop = styled.div``;

const CardImg = styled.img`
  width: 100%;
  border-radius: 5px;
  margin-bottom: 0;
`;

const CardBottom = styled.div`
  position: relative;
  display: grid;
  width: 95%;
  border-radius: 5px;
  background-color: var(--neut-lightest);
  box-shadow: 2px 3px 2px 0px var(--shadow), 2px 8px 10px 0px var(--shadow);
  transform: translateY(-25px);
  padding: 10px;
`;

const Price = styled.h2`
  font-size: 30px;
  margin: 0 0 12px 0;
`;

const MainInfoWrapper = styled.div`
  margin: 0 0 12px 0;
`;

const SpanInfo = styled.span`
  padding-right: 5px;
  font-size: 24px;
  font-weight: 700;
  font-family: "Nunito", sans-serif;
`;

const GeneralInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 50px;
  margin: 0 0 12px 0;

  @media screen and (max-width: 1365px) {
    grid-column-gap: 25px;
  }

  @media screen and (max-width: 1300px) {
    grid-template-columns: 1fr;
  }
`;

const InfoLeft = styled.div`
  grid-column: 1 / 2;

  @media screen and (max-width: 1300px) {
    grid-column: 1 / -1;
  }
`;
const InfoRight = styled.div`
  grid-column: 2 / -1;

  @media screen and (max-width: 1300px) {
    grid-column: 1 / -1;
  }
`;

const GeneralText = styled.p`
  font-size: 14px;
  margin: 0 0 8px 0;
`;

const SmallHeading = styled.h3`
  margin-bottom: 8px;
`;

const HorsePowerText = styled.h4`
  font-size: 24px;
  margin-bottom: 24px;
`;

const HighlightedText = styled.span`
  color: var(--red-dark);
`;

const DescriptionBox = styled.p`
  min-height: 300px;
  margin-bottom: 0;
`;

const StyledNavLink = styled(props => <Link {...props} />)`
  justify-self: center;
  font-size: 18px;
  color: var(--body-light);
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  padding: 16px 0px;
  background: var(--red-dark);
  border-radius: 10px;
  border: 2px solid var(--red-base);
  width: 100%;
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
  }
`;

const BuildInHouseBanner = styled.div`
  position: absolute;
  right: 10px;
  margin-top: -28px;
`;

const BannerText = styled.h5`
  background: var(--red-base);
  color: var(--body-light);
  font-size: 18px;
  font-weight: 400;
  font-family: "Nunito", sans-serif;
  padding: 18px 24px;
  border-radius: 5px;
  box-shadow: 2px 3px 2px 0px var(--shadow), 2px 8px 10px 0px var(--shadow);

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
