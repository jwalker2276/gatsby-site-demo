import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Nav = () => (
  <NavWrapper>
    <NavList>
      <NavListItem>
        <StyledNavLink to="/">Home</StyledNavLink>
      </NavListItem>
      <NavListItem>
        <StyledNavLink to="/about">About</StyledNavLink>
      </NavListItem>
      <NavListItem>
        <StyledNavLink to="/services">Services</StyledNavLink>
      </NavListItem>
      <NavListItem>
        <StyledNavLink to="/cars">Cars</StyledNavLink>
      </NavListItem>
      <NavListItem>
        <StyledNavLink to="/contact">Contact</StyledNavLink>
      </NavListItem>
    </NavList>
  </NavWrapper>
);

export default Nav;

const NavWrapper = styled.nav`
  grid-row: 2 / -1;
  grid-column: 1 / -1;
  height: 100%;
  background-color: red;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%239C92AC' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  height: 100%;
  align-items: center;
  padding: 16px;
  box-sizing: border-box;
`;

const NavListItem = styled.li`
  padding-right: 48px;
  margin-bottom: 0px;
`;

const StyledNavLink = styled(props => <Link {...props} />)`
  font-size: 18px;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
`;
