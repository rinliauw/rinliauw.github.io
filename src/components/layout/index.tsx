import React from "react";
import { Link } from "gatsby";
import Navbar from "../navbar";
import { GlobalHeader, GlobalWrapper, MainHeading } from "./styled";

interface Props {
  location: Location;
  title: string;
  children?: any;
}

const Layout = ({ location, title, children }: Props) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  return (
    <div>
      <Navbar />
      <GlobalWrapper>
        <GlobalHeader>
          <MainHeading>
            <Link to="/">{title}</Link>
          </MainHeading>
        </GlobalHeader>
        <main>{children}</main>
        <footer>Copyright © {new Date().getFullYear()} Jonathan Jauhari</footer>
      </GlobalWrapper>
    </div>
  );
};

export default Layout;
