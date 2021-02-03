import React, { useState } from "react";
import { Link } from "gatsby";

import styled from "styled-components";
import { spacing, fontSize } from "../common";
import theme from "../common/theme";
import Logo from "./logo";
import { devices } from "../common/breakpoints";

// TODO: breakpoints.

const Nav = styled.nav`
  margin: 0 auto;
  height: ${spacing[15]};

  position: initial;
  padding: ${spacing[12]} ${spacing[4]};
  background-color: transparent;
`;

const NavbarWrapper = styled.div`
  display: flex;
  max-width: 75rem;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;

const NavbarBrandLink = styled(Link)`
  flex: 0 0 auto;
  transition: color 0.1s;

  &:focus,
  &:hover {
    color: ${theme.colors.textLight};
  }
`;

const NavbarSecondary = styled.div`
  display: none;

  @media ${devices.tablet_portrait} {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;

const MobileMenuContainer = styled.div`
  position: fixed;
  top: 60;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  padding: 1rem 0;
  overflow: auto;

  @media ${devices.tablet_portrait} {
    display: none;
  }
`;

interface NavbarLinkProps {
  selected: boolean;
}

const NavbarLink = styled(Link)<NavbarLinkProps>`
  display: block;
  font-weight: 500;

  margin: 0 ${spacing[2]};
  font-size: ${fontSize[3]};

  padding: ${spacing[1]} ${spacing[4]} ${spacing[1]} ${spacing[4]};
  transition: color 0.1s;

  &:focus,
  &:hover {
    color: ${theme.colors.textLight};
  }

  border-bottom-style: solid;
  border-bottom-width: ${spacing[1]};

  border-bottom-color: ${(p: NavbarLinkProps) =>
    p.selected ? theme.colors.complementary : theme.colors.background};
`;

// color: ${(p: NavbarLinkProps) =>
//   p.selected ? theme.colors.primaryBright : theme.colors.backgroundBright};

interface Props {
  path: string;
}

const Navbar = ({ path }: Props) => {
  return (
    <Nav>
      <NavbarWrapper>
        <NavbarBrandLink to="/">
          <Logo />
        </NavbarBrandLink>
        <NavbarSecondary>
          <NavbarLink to="/blog" selected={path.includes("/blog")}>
            Blog
          </NavbarLink>
          <NavbarLink to="/projects" selected={path.includes("/projects")}>
            Projects
          </NavbarLink>
          <NavbarLink to="/about" selected={path.includes("/about")}>
            About
          </NavbarLink>
        </NavbarSecondary>
      </NavbarWrapper>
    </Nav>
  );
};

export default Navbar;
