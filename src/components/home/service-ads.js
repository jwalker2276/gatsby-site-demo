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
        <Accent />
        <TagIcon />
        <AdText>Get Up to $100 in Savings</AdText>
        <AdTextSmall>When you purchase your first tuning service.</AdTextSmall>
      </AdLarge>
      <AdSmallOne image={exhaustImg}>
        <Accent />
        <TagIcon />
        <AdText>Get Up to $50 in Savings</AdText>
        <AdTextSmall>When you purchase a new exhaust systems.</AdTextSmall>
      </AdSmallOne>
      <AdSmallTwo image={rimImg}>
        <Accent />
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
  background: var(--neut-lighter);
  padding-bottom: 96px;
  display: grid;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%239C92AC' fill-opacity='0.15' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
`;

const SectionTitle = styled.h1`
  font-size: 48px;
  text-align: center;
  margin: 64px;
  text-transform: uppercase;
  color: var(--heading-dark);
`;

const AdsWrapper = styled.div`
  display: grid;
  grid-template: 1fr 1fr / 3fr 2fr;
  height: 500px;
  grid-gap: 36px;
  padding: 0 16px;
`;

const BasicAd = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  border-bottom: 5px solid var(--red-dark);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const AdLarge = styled(BasicAd)`
  grid-column: 1 / 2;
  grid-row: 1 / -1;
`;

const AdText = styled.h2`
  color: var(--body-light);
  font-size: 36px;
  margin: 12px;
  text-shadow: 0px 0px 20px var(--neut-darkest);
`;

const AdTextSmall = styled.p`
  color: var(--body-light);
  font-size: 18px;
  margin: 0px;
  opacity: 0.9;
`;

const AdSmallOne = styled(BasicAd)`
  grid-column: 2 / -1;
  grid-row: 1 / 2;
`;

const AdSmallTwo = styled(BasicAd)`
  grid-column: 2 / -1;
  grid-row: 2 / -1;
`;

const Accent = styled.div`
  background: var(--red-base);
  position: absolute;
  top: -80px;
  right: -90px;
  height: 150px;
  width: 150px;
  transform: rotate(45deg);
`;

const TagIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 0px;
  width: 40px;
  height: 40px;
  z-index: 10;
  background: url(${tagImg}) no-repeat;
  opacity: 0.95;
`;
