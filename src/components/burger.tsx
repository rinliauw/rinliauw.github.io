import React from "react";

import styled from "styled-components";
import { devices } from "../common/breakpoints";
import theme from "../common/theme";

interface StyledBurgerProps {
  open: boolean;
}

const BurgerWrapper = styled.div`
  @media ${ devices.tablet_portrait }  {
    display: none;
  }
  padding: 1rem;
  z-index: 20;
`;

const StyledBurger = styled.button<StyledBurgerProps>`
  // position: fixed;
  top: 60;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  // z-index: 30;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) =>
      open ? theme.colors.complementary: theme.colors.complementary};
    border-radius: 10px;
    transition: all 0.1s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Burger = ({ open, setOpen }: Props) => {
  return (
    <BurgerWrapper>
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div/>
      <div/>
      <div/>
    </StyledBurger>
    </BurgerWrapper>
  );
};

export default Burger;
