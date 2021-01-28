import React from "react";
import styled from "styled-components";

import Container from "./container";
import Navbar from "./navbar";
import Footer from "./footer";

const LayoutBackground = styled.div`
  background-color: black;
  min-height: 100%;
`;

const LayoutHeader = styled.header`
  position: absolute;
  left: 0;
  right: 0;
  z-index: 10;
`;

// fr is fraction
const LayoutMain = styled.main`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
`;

const LayoutFooter = styled.footer`
  left: 0;
  right: 0;
  bottom: 0;
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
    <LayoutBackground>
      <LayoutHeader>
        <Navbar />
      </LayoutHeader>
      <LayoutMain>
        <Container>{children}</Container>
      </LayoutMain>
      <LayoutFooter>
        <Footer />
      </LayoutFooter>
    </LayoutBackground>
  );
};

export default Layout;
