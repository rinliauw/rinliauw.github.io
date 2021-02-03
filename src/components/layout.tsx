import React from "react";
import styled, { ThemeProvider } from "styled-components";

import Container from "./container";
import Navbar from "./navbar";
import Footer from "./footer";

import { GlobalStyle } from "../styles/global-style";
import theme from "../styles/theme";

const LayoutBackground = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 100%;
`;

const LayoutHeader = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  z-index: 10;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet_portrait}) {
    position: absolute;
  }
`;

// fr is fraction
const LayoutMain = styled.main`
  display: flex;
  min-height: 40rem;
`;

const LayoutFooter = styled.footer`
  margin-top: ${({ theme }) => theme.spacing[8]};
`;

interface Props {
  location: Location;
  children?: any;
}

const Layout = ({ location, children }: Props) => {
  const rootPath = `${__PATH_PREFIX__}/`;

  return (
    <ThemeProvider theme={theme}>
      <LayoutBackground>
        <LayoutHeader>
          <Navbar path={location.pathname} />
        </LayoutHeader>
        <LayoutMain>
          <Container>
            <GlobalStyle />
            {children}
          </Container>
        </LayoutMain>
        <LayoutFooter>
          <Footer />
        </LayoutFooter>
      </LayoutBackground>
    </ThemeProvider>
  );
};

export default Layout;
