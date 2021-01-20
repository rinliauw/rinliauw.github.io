import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <h2>
          <Link to="/posts">Posts</Link>
        </h2>
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
