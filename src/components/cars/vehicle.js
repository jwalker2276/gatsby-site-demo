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
    sellerNotes,
    shopNotes,
    dynoSpecs,
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
            <BannerText>Built In House</BannerText>
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
          Tested Horsepower: <HighlightedText>{dynoSpecs}</HighlightedText> whp
        </HorsePowerText>
        <StyledNavLink to="/contact">Check Availability</StyledNavLink>

        <SmallHeading>About</SmallHeading>
        <div>
          <p>{sellerNotes}</p>
          <p>{shopNotes}</p>
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
  max-width: 450px;
  border-radius: 5px;
  margin-bottom: 0;
`;

const CardBottom = styled.div`
  position: relative;
  display: grid;
  max-width: 430px;
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
  grid-column-gap: 16px;
  margin: 0 0 12px 0;
`;

const InfoLeft = styled.div`
  grid-column: 1 / 2;
`;
const InfoRight = styled.div`
  grid-column: 2 / -1;
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

  @media screen and (max-width: 960px) {
    grid-column: 2 / -1;
    grid-row: 1 / -1;
    margin-bottom: 0;
    justify-self: right;
    margin-right: 16px;
    font-size: 14px;
    padding: 12px 0;
  }

  @media screen and (max-width: 500px) {
    margin-right: 8px;
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
`;
