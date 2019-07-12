import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import SocialIconGroup from "./social-icons-group";

const Nav = () => {
  // State
  const [isMobile, setIsMobile] = useState(false);
  const [hasRun, toggleHasRun] = useState(false);
  const [isOpen, toggleMenu] = useState(false);

  // Runs after each render
  useEffect(() => {
    // Run once on load.
    if (hasRun === false) {
      updateSize();
      // Don't run again untill resize.
      toggleHasRun();
    }

    // Function to run on load or whenn resize event fires
    function updateSize() {
      const mobileMaxWidth = 500;
      const currentWidth = window.innerWidth;

      if (currentWidth >= mobileMaxWidth && isMobile) {
        setIsMobile(false);
      } else if (currentWidth <= mobileMaxWidth && !isMobile) {
        setIsMobile(true);
      }
    }

    // Add event
    window.addEventListener("resize", updateSize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  });

  const handleMenuButton = () => {
    if (isOpen) toggleMenu(false);
    else toggleMenu(true);
  };

  if (isMobile) {
    return (
      <NavWrapper>
        <SocialIconGroup />
        <MobileMenuButton onClick={handleMenuButton}>
          <MobileMenuLineTop menuIsOpen={isOpen} />
          <MobileMenuLineBottom menuIsOpen={isOpen} />
        </MobileMenuButton>
      </NavWrapper>
    );
  } else {
    return (
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
  }
};

export default Nav;

// Mobile nav components
const MobileMenuButton = styled.button`
  position: relative;
  grid-column: 2 / -1;
  height: 100%;
  width: 50px;
  justify-self: right;
  padding: 0px;
  border: 0;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);

  :focus {
    outline-style: dotted;
    outline-color: var(--neut-lightest);
    outline-width: thin;
  }
`;

const MobileMenuLineTop = styled.span`
  background-color: var(--neut-lightest);
  display: block;
  position: absolute;
  top: ${props => (props.menuIsOpen ? "11px" : "21px")};
  transform: ${props => (props.menuIsOpen ? "rotate(0deg)" : "rotate(135deg)")};
  right: 2px;
  width: 45px;
  height: 7px;
  transition: all 0.25s ease-in;
`;

const MobileMenuLineBottom = styled(MobileMenuLineTop)`
  top: ${props => (props.menuIsOpen ? "30px" : "21px")};
  transform: ${props =>
    props.menuIsOpen ? "rotate(0deg)" : "rotate(-135deg)"};
`;

// Full width nav components
const NavWrapper = styled.nav`
  grid-row: 2 / -1;
  grid-column: 1 / -1;
  height: 100%;
  background-color: var(--red-base);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%239C92AC' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");

  @media (max-width: 500px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 4px;
  }
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  height: 100%;
  width: 100%;
  max-width: 1440px;
  align-items: center;
  margin: 0px auto;
  border-left: 1px solid var(--red-darkest);
  box-sizing: border-box;
`;

const NavListItem = styled.li`
  height: 100%;
  display: flex;
  border-right: 1px solid var(--red-darkest);
  margin: 0;
`;

const StyledNavLink = styled(props => <Link {...props} />)`
  font-size: 18px;
  width: 100%;
  color: var(--neut-lightest);
  text-decoration: none;
  text-transform: uppercase;
  text-shadow: 0px 0px 2px var(--neut-dark);
  display: flex;
  align-items: center;
  padding: 0 24px;
  border-bottom: 4px solid var(--red-base);
`;

// This object is passed as props to the link component when page matches nav.
const activeStyles = {
  borderBottom: "4px solid var(--red-lightest)",
};
