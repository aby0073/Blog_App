import React from "react";
import { Link, useNavigate } from "react-router-dom"; 
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate(); 

  const handleBack = () => {
    navigate(-1); 
  };

  return (
    <div className="navbar">
      <div className="navbar-right">
   
        <button onClick={handleBack}>Back</button>
      </div>
      <h1 className="logo">BLOG</h1> 
      <ul className="navbar-menu">
        <li>
          <Link to="/">HomePage</Link>
        </li>
        <li>
          <Link to="/post-blog">Post Blog</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
