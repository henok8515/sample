import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="header-container">
    <div className="logo">
      <Link to="/">
        <div className="logo-png"></div>
      </Link>
    </div>
    <div className="nav-bar">
      <h1>home</h1>
      <Link className="link" to="/Card">
        <h1>about</h1>
      </Link>

      <h1>log out</h1>
    </div>
  </div>
);
export default Header;
