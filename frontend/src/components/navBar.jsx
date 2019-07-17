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
        H
      </div>
    </nav>
  );
};

export default NavBar;
