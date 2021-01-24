import React from "react";
import { Link } from "gatsby";
import { NavbarContainer } from "./styled";

const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <h2>Jonathan Jauhari</h2>
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
      <hr></hr>
    </>
  );
};

export default Navbar;
