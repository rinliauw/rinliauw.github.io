import React from "react";
import { Link } from "gatsby";

import styled from "styled-components";
import { spacing, fontSize } from "../common";
import theme from "../common/theme";
import Logo from "./logo";

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
  padding-left: ${spacing[6]};
  padding-right: ${spacing[6]};
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
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

interface NavbarLinkProps {
  selected: boolean;
}

const NavbarLink = styled(Link)`
  display: block;
  font-weight: 500;

  margin: 0 ${spacing[2]};
  font-size: ${fontSize[3]};

  padding: ${spacing[1]} ${spacing[4]} ${spacing[1]} ${spacing[4]};
  border-radius: 2px;
  transition: color 0.1s;

  &:focus,
  &:hover {
    color: ${theme.colors.primaryLight};
  }
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
          <NavbarLink to="/blog">Blog</NavbarLink>
          <NavbarLink to="/projects">Projects</NavbarLink>
          <NavbarLink to="/about">About</NavbarLink>
        </NavbarSecondary>
      </NavbarWrapper>
    </Nav>
  );
};

export default Navbar;
