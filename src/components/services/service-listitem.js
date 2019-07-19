import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const ServiceListItem = ({ data }) => (
  <ListItem image={data.ImgSrc}>
    <ListItemImage src={data.ImgSrc} alt={data.Alt} />
    <ListDescriptions>
      <ListItemTitle>{data.Heading}</ListItemTitle>
      <ListItemText>{data.Text}</ListItemText>
    </ListDescriptions>
    <StyledNavLink to="/contact">{data.ButtonText}</StyledNavLink>
  </ListItem>
);

export default ServiceListItem;

const ListItem = styled.li`
  display: grid;
  grid-template: auto auto / auto 1fr auto;
  background-color: var(--neut-lighter);
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 1px 1px 2px 2px var(--shadow), 2px 4px 2px 2px var(--shadow);
  align-items: center;

  @media screen and (max-width: 650px) {
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
      url(${props => props.image});
    background-size: cover;
    padding: 16px 0 16px 8px;
  }
`;

const ListDescriptions = styled.div`
  margin-left: 16px;
  padding-left: 16px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-left: 4px solid var(--red-base);
  grid-column: 2 / 3;
  grid-row: 1 / -1;

  @media screen and (max-width: 650px) {
    border: none;
    margin-left: 0;
    padding-left: 4px;
  }
`;

const ListItemTitle = styled.h2`
  font-size: 36px;
  margin: 0 0 8px 0;
  color: var(--heading-dark);

  @media screen and (max-width: 650px) {
    font-size: 24px;
    color: var(--body-light);
  }
`;

const ListItemText = styled.p`
  font-size: 16px;
  margin: 0;
  color: var(--body-dark);

  @media screen and (max-width: 650px) {
    color: var(--body-light);
    font-size: 14px;
    line-height: 1.5;
  }
`;

const ListItemImage = styled.img`
  width: 150px;
  border-radius: 5px;
  grid-column: 1 / 2;
  grid-row: 1 / -1;
  margin: 0;

  @media screen and (max-width: 650px) {
    display: none;
  }
`;

const StyledNavLink = styled(props => <Link {...props} />)`
  grid-column: 3 / -1;
  grid-row: 1 / -1;
  font-size: 16px;
  color: var(--body-light);
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  padding: 16px 0px;
  background: var(--red-dark);
  border-radius: 10px;
  border: 2px solid var(--red-base);
  width: 150px;
  margin-left: 16px;
  box-shadow: 2px 3px 2px 0px var(--shadow), 2px 8px 10px 0px var(--shadow);
  transition: box-shadow 0.1s ease-in, transform 0.1s ease-in;

  :hover {
    box-shadow: 2px 8px 2px 0px var(--shadow), 2px 8px 15px 0px var(--shadow);
    transform: translate(0px, -2px);
  }

  @media screen and (max-width: 650px) {
    font-size: 14px;
    width: 115px;
    padding: 14px;
    margin: 0 8px 0 24px;
  }
`;
