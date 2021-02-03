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

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet_portrait}) {
    position: absolute;
  }

  left: 0;
  right: 0;
  z-index: 10;
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
  title: string;
  children?: any;
}

const Layout = ({ location, title, children }: Props) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

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
