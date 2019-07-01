import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Nav = () => (
  <NavWrapper>
    <NavList>
      <NavListItem>
        <StyledNavLink to="/" activeStyle={activeStyles}>
          Home
        </StyledNavLink>
      </NavListItem>
      <NavListItem>
        <StyledNavLink to="/about" activeStyle={activeStyles}>
          About
        </StyledNavLink>
      </NavListItem>
      <NavListItem>
        <StyledNavLink to="/services" activeStyle={activeStyles}>
          Services
        </StyledNavLink>
      </NavListItem>
      <NavListItem>
        <StyledNavLink to="/cars" activeStyle={activeStyles}>
          Cars
        </StyledNavLink>
      </NavListItem>
      <NavListItem>
        <StyledNavLink to="/contact" activeStyle={activeStyles}>
          Contact
        </StyledNavLink>
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
  margin: 0px 16px;
  border-left: 1px solid black;
  box-sizing: border-box;
`;

const NavListItem = styled.li`
  height: 100%;
  display: flex;
  border-right: 1px solid black;
  margin: 0;
`;

const StyledNavLink = styled(props => <Link {...props} />)`
  font-size: 18px;
  width: 100%;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  padding: 0 24px;
  border-bottom: 2px solid red;
`;

// This object is passed a props to the link component when page matches nav.
const activeStyles = {
  borderBottom: "4px solid white",
};
