import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";
const NavBar = ({ handleMenuClick }) => {
  return (
    <nav className="NavBar">
      <Link className="NavBar__title-link" to="/govs">
        <h1 className="NavBar__title">GovRate</h1>
      </Link>
      <div className="NavBar__hamburger" onClick={handleMenuClick}>
        <div className="NavBar__hamburger-line" />
        <div className="NavBar__hamburger-line" />
        <div className="NavBar__hamburger-line" />
      </div>
    </nav>
  );
};

export default NavBar;
