import React, { useEffect, useRef, useState } from "react";
import { Link } from "gatsby";

import styled from "styled-components";
import { spacing, fontSize } from "../common";
import theme from "../common/theme";
import Logo from "./logo";
import { devices } from "../common/breakpoints";
import Burger from "./burger";
import Menu from "./menu";

const Nav = styled.nav`
  margin: 0 auto;

  background-color: ${theme.colors.backgroundDark};

  @media ${devices.tablet_portrait} {
    position: initial;
    padding: ${spacing[12]} ${spacing[4]};
    background-color: transparent;
  }
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
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media ${devices.tablet_portrait} {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;

interface NavbarLinkProps {
  selected: boolean;
}

const NavbarLink = styled(Link)<NavbarLinkProps>`
  display: none;
  font-weight: lighter;

  @media ${devices.tablet_portrait} {
    display: block;

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
  }
`;

const MobileMenu = styled.div`
  display: flex;
`;

const useOnClickOutside = (
  ref: React.RefObject<HTMLDivElement>,
  handler: React.Dispatch<React.SetStateAction<boolean>>
) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};

interface Props {
  path: string;
}

const Navbar = ({ path }: Props) => {
  const [open, setOpen] = useState(false);

  const node = useRef<HTMLDivElement>(null);
  useOnClickOutside(node, () => setOpen(false));

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
          <MobileMenu ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} />
          </MobileMenu>
        </NavbarSecondary>
      </NavbarWrapper>
    </Nav>
  );
};

export default Navbar;
