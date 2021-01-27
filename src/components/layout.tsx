import React from "react";
import Navbar from "./navbar";

import styled from "styled-components";
import { spacing, fontSize } from "../common";
import Container from "./container";

export const LayoutBackground = styled.div`
  background-color: black;
`;

export const LayoutHeader = styled.header`
  position: absolute;
  left: 0;
  right: 0;
  z-index: 10;
`;

// fr is fraction
export const LayoutMain = styled.main`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
`;

export const GlobalWrapper = styled.div`
  margin: ${spacing[20]} auto;
  max-width: 52rem;
  padding: ${spacing[5]};
`;

export const GlobalHeader = styled.div`
  margin-bottom: ${spacing[2]};
`;

export const MainHeading = styled.h2`
  font-size: ${fontSize[5]};
  margin: ${spacing[0]};
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
      <footer>Copyright © {new Date().getFullYear()} Jonathan Jauhari</footer>
    </LayoutBackground>
  );
};

export default Layout;
