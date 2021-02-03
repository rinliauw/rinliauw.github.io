import { Link } from "gatsby";
import React from "react";

import styled from "styled-components";
import { fontSize, spacing } from "../common";
import { breakpoints, devices } from "../common/breakpoints";
import theme from "../common/theme";

export const StyledMenu = styled.nav<Props>`
  @media ${ devices.tablet_portrait }  {
    display: none;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${theme.colors.backgroundDarker};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  // left: 0;
  right: 0;
  z-index: 15;
  transition: transform 0.1s ease-in-out;
  transform: ${({ open }) =>
    open ? "translateX(0)" : "translateX(100%)"};

  @media (max-width: ${breakpoints.phone}) {
    width: 100%;
  }

  a {
    font-size: ${fontSize[1]};
    margin: ${spacing[4]} 0;
    
    border-bottom-style: dotted;
    border-bottom-width: 3px;
    border-bottom-color: ${theme.colors.primary};

    font-weight: lighter;
    color: ${theme.colors.text};
    // text-decoration: underline;

    transition: color 0.1s linear;

    @media ${devices.phone} {
      font-size: ${fontSize[3]};
      text-align: center;
    }

    &:focus,
    &:hover {
      color: ${theme.colors.textLight};
      border-bottom-style: solid;
      border-bottom-width: 3px;
      border-bottom-color: ${theme.colors.complementary};
    }
  }
`;

interface Props {
  open: boolean;
}

const Menu = ({ open }: Props) => {
  return (
    <StyledMenu open={open}>
      <Link to="/blog">
        Blog
      </Link>
      <Link to="/projects">
        Projects
      </Link>
      <Link to="/about">
        About
      </Link>
    </StyledMenu>
  );
};
export default Menu;
