import React from "react";
import { Link } from "gatsby";

import styled from "styled-components";
import { fontSize } from "../common";

const Nav = styled.nav`
  margin: 0 auto;
  height: 3.75rem;

  position: initial;
  padding: 3rem 1rem;
  background-color: transparent;
  box-shadow: none;
  backdrop-filter: none;
`;

const NavbarContainer = styled.div`
  display: flex;
  max-width: 75rem;
  align-items: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin-left: auto;
  margin-right: auto;
`;

const NavbarBrand = styled.h1`
  font-size: 20;
  font-weight: 500;
  margin: 0;
`;

const NavbarBrandLink = styled(Link)`
  flex: 0 0 auto;
  cursor: pointer;
  transition: base;
  color: lighter;
`;

const NavbarSecondary = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const NavbarLink = styled(Link)`
  display: block;
  font-weight: 500;
  color: lighter;
  transition: base;

  margin: 0 1rem;
  font-size: ${fontSize[3]};
`;

const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer>
        <NavbarBrandLink to="/">
          <NavbarBrand>Jonathan Jauhari</NavbarBrand>
        </NavbarBrandLink>
        <NavbarSecondary>
          <NavbarLink to="/about">About</NavbarLink>
          <NavbarLink to="/blog">Blog</NavbarLink>
          <NavbarLink to="/projects">Projects</NavbarLink>
        </NavbarSecondary>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
