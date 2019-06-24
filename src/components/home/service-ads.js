import React from "react";
import styled from "styled-components";
import engineImg from "../../images/engine1.jpg";
import exhaustImg from "../../images/exhaust.jpg";
import rimImg from "../../images/rim.jpg";

const ServiceAds = () => (
  <Section>
    <SectionTitle>Offers For You</SectionTitle>
    <AdsWrapper>
      <AdLarge>
        <AdLargeText>$100 off first tuning service.</AdLargeText>
      </AdLarge>
      <AdSmallOne>
        <AdSmallOneText>$50 off on new exhaust systems.</AdSmallOneText>
      </AdSmallOne>
      <AdSmallTwo>
        <AdSmallTwoText>
          $100 off 4 tires with new rims purchase.
        </AdSmallTwoText>
      </AdSmallTwo>
    </AdsWrapper>
  </Section>
);

export default ServiceAds;

// Styled Components

const Section = styled.section`
  box-sizing: content-box;
  background: red;
  padding-bottom: 96px;
  display: grid;
`;

const SectionTitle = styled.h1`
  font-size: 36px;
  text-align: center;
  margin: 36px;
  text-transform: uppercase;
`;

const AdsWrapper = styled.div`
  display: grid;
  grid-template: 1fr 1fr / 3fr 2fr;
  height: 450px;
  grid-gap: 16px;
  padding: 0 16px;
`;

const AdLarge = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / -1;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${engineImg});
  background-size: cover;
  background-repeat: no-repeat;
`;

const AdLargeText = styled.h2`
  color: white;
  font-size: 24px;
  margin: 10px;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.85);
`;

const AdSmallOne = styled.div`
  background-color: red;
  grid-column: 2 / -1;
  grid-row: 1 / 2;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${exhaustImg});
  background-size: cover;
  background-repeat: no-repeat;
`;

const AdSmallOneText = styled(AdLargeText)``;

const AdSmallTwo = styled.div`
  background-color: blue;
  grid-column: 2 / -1;
  grid-row: 2 / -1;
  background-image: url(${rimImg});
  background-size: cover;
  background-repeat: no-repeat;
`;

const AdSmallTwoText = styled(AdLargeText)``;
