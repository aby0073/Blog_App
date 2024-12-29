import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
 

  return (
    <div className="navbar">
      <h1 className="logo"> BLOG</h1>
      <ul className="navbar-menu">
        <li>
          <Link to="/">HomePage</Link>
        </li>
        <li>
          <Link to="/post-blog">Post Blog</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
      </ul>
      <div className="navbar-right">
        <button>Sign out</button>
      </div>
    </div>
  );
};

export default Navbar;
