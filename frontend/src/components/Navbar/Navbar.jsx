import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <h1 className="logo"> BLOG</h1>
      <ul className="navbar-menu">
        <li
          onClick={(Ho) => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          HomePage
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Post blog
        </li>
        <li
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          search
        </li>
        
      </ul>
      <div className="navbar-right">
        <button>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
