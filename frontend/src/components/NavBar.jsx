import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";
const NavBar = ({ handleMenuClick, open }) => {
  let lineClasses = open
    ? "NavBar__hamburger-line open"
    : "NavBar__hamburger-line";
  return (
    <nav className="NavBar">
      <Link className="NavBar__title-link" to="/">
        <h1 className="NavBar__title">GovRate</h1>
      </Link>
      <div
        role="button"
        className="NavBar__hamburger"
        onClick={handleMenuClick}
      >
        <div className={lineClasses} />
        <div className={lineClasses} />
        <div className={lineClasses} />
      </div>
    </nav>
  );
};

export default NavBar;
