import { Link } from "gatsby";
import React from "react";

import styled from "styled-components";
import theme from "../styles/theme";

export const StyledMenu = styled.nav<Props>`
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet_portrait}) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.colors.backgroundDarker};
  height: 100vh;
  text-align: left;
  padding: ${({ theme }) => theme.spacing[8]};
  position: absolute;
  top: 0;
  // left: 0;
  right: 0;
  z-index: 15;
  transition: transform 0.1s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    width: 100%;
  }

  a {
    font-size: ${({ theme }) => theme.fontSize[1]};
    margin: ${({ theme }) => theme.spacing[4]} 0;

    border-bottom-style: dotted;
    border-bottom-width: 3px;
    border-bottom-color: ${({ theme }) => theme.colors.primary};

    font-weight: lighter;
    color: ${({ theme }) => theme.colors.text};
    // text-decoration: underline;

    transition: color 0.1s linear;

    @media (min-width ${({ theme }) => theme.breakpoints.phone}) {
      font-size: ${({ theme }) => theme.fontSize[3]};
      text-align: center;
    }

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
