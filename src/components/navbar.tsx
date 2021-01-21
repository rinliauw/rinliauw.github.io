import React from "react";
import { Link } from "gatsby";

import "../styles/navbar.scss";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-item">
          <h2>
            <Link to="/blog">Blog</Link>
          </h2>
        </div>
        <h2>
          <Link to="/projects">Projects</Link>
        </h2>
        <h2>
          <Link to="/about">About</Link>
        </h2>
      </div>
      <hr></hr>
    </>
  );
};

export default Navbar;
