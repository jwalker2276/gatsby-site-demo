import React from "react";
import styled from "styled-components";
import engineImg from "../../images/engine1.jpg";
import exhaustImg from "../../images/exhaust.jpg";
import rimImg from "../../images/rim.jpg";
import tagImg from "../../images/icon-tag.svg";

const ServiceAds = () => (
  <Section>
    <SectionTitle>Offers For You</SectionTitle>
    <AdsWrapper>
      <AdLarge image={engineImg}>
        <TagIcon />
        <AdText>Get Up to $100 in Savings</AdText>
        <AdTextSmall>When you purchase your first tuning service.</AdTextSmall>
      </AdLarge>
      <AdSmallOne image={exhaustImg}>
        <TagIcon />
        <AdText>Get Up to $50 in Savings</AdText>
        <AdTextSmall>When you purchase a new exhaust systems.</AdTextSmall>
      </AdSmallOne>
      <AdSmallTwo image={rimImg}>
        <TagIcon />
        <AdText>Get Up to $100 in Savings</AdText>
        <AdTextSmall>
          When you purchase a set of new rims with tires.
        </AdTextSmall>
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
  background-color: red;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%239C92AC' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
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
  height: 500px;
  grid-gap: 36px;
  padding: 0 16px;
`;

const BasicAd = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  border: 2px solid white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const AdLarge = styled(BasicAd)`
  grid-column: 1 / 2;
  grid-row: 1 / -1;
`;

const AdText = styled.h2`
  color: white;
  font-size: 36px;
  margin: 12px;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.85);
`;

const AdTextSmall = styled.p`
  color: white;
  font-size: 18px;
  margin: 0px;
`;

const AdSmallOne = styled(BasicAd)`
  grid-column: 2 / -1;
  grid-row: 1 / 2;
`;

const AdSmallTwo = styled(BasicAd)`
  grid-column: 2 / -1;
  grid-row: 2 / -1;
`;

const TagIcon = styled.div`
  position: absolute;
  top: -15px;
  left: -15px;
  width: 70px;
  height: 70px;
  z-index: 10;
  background: url(${tagImg}) no-repeat;
`;
