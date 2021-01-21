import React from "react";
import { Link } from "gatsby";
import Navbar from "./navbar";

interface Props {
  location: Location;
  title: string;
  children?: any;
}

const Layout = ({ location, title, children }: Props) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        <h1 className="main-heading">
          <Link to="/">
            <span>Jonathan </span>
            <span style={{color: "#c08e5b"}}>Jauhari</span>
          </Link>
        </h1>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>Copyright © {new Date().getFullYear()} Jonathan Jauhari</footer>
    </div>
  );
};

export default Layout;
