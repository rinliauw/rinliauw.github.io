import React from "react";
import { Link } from "gatsby";
import Logo from "./logo";

import styled from "styled-components";
import { spacing, fontSize } from "../common";

export const NavbarContainer = styled.div`
    // overflow: hidden;
    background-color: black;
    overflow: hidden;
    top: 0;
    width: 100%;
    position: fixed;
    font-family: ${({ theme }) => theme.font.sans};
    display: flex;
    h2 {
      padding-right: ${spacing[4]};
      word-wrap: normal;
      font-size: ${fontSize[3]};
      color: ${({ theme }) => theme.colors.primary};
    }
  
    a:hover {
      color: ${({ theme }) => theme.colors.primaryBright};
    }
  }
`;

/*

.navbar {
    // overflow: hidden;
    // background-color: aqua;
    // top: 0;
    // width: 100%;
    // position: fixed;
    display: flex;
    h2 {
      padding-right: var(--spacing-4);
      word-wrap: normal;
      font-size: var(--fontSize-3);
      color: var(--color-primary);
    }
  
    a:hover {
      color: var(--color-primary-bright);
    }
  }
  
  // .navbar-item {
  //   padding-right: var(--spacing-4);
  // }
  
  // .navbar-item:hover {
  //   background-color: rgb(46, 46, 46);
  // }
*/


const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <Logo />
        <h2>
          <Link to="/blog">Blog</Link>
        </h2>
        <h2>
          <Link to="/projects">Projects</Link>
        </h2>
        <h2>
          <Link to="/about">About</Link>
        </h2>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
