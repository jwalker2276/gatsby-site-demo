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
