import { Link } from "gatsby";
import React from "react";

import styled from "styled-components";

export const StyledMenu = styled.nav<Props>`
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet_portrait}) {
    display: none;
  }

  background: ${({ theme }) => theme.colors.backgroundDarker};
  height: 100vh;
  padding: ${({ theme }) => theme.spacing[8]};

  // center links vertically, and text centered as well
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  // top left
  position: absolute;
  top: 0;
  right: 0;
  z-index: 20;

  // slide out if open
  transition: transform 0.1s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};

  // if smaller than phone, then the open menu will take up the whole screen
  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    width: 100%;
  }

  a {
    margin: ${({ theme }) => theme.spacing[4]} 0;

    font-size: ${({ theme }) => theme.fontSize[3]};
    font-weight: lighter;
    color: ${({ theme }) => theme.colors.text};

    border-bottom-style: dotted;
    border-bottom-width: 3px;
    border-bottom-color: ${({ theme }) => theme.colors.primary};

    transition: color 0.1s linear;

    &:focus,
    &:hover {
      color: ${({ theme }) => theme.colors.textLight};
      border-bottom-style: solid;
      border-bottom-width: 3px;
      border-bottom-color: ${({ theme }) => theme.colors.complementary};
    }
  }
`;

interface Props {
  open: boolean;
}

const Menu = ({ open }: Props) => {
  return (
    <StyledMenu open={open}>
      <Link to="/blog">Blog</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/about">About</Link>
    </StyledMenu>
  );
};
export default Menu;
