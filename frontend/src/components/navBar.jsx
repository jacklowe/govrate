import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";
const NavBar = ({ user, handleMenuClick }) => {
  let navLinks;

  if (user) {
    navLinks = (
      <ul className="NavBar__list">
        <li onClick={handleMenuClick} className="NavBar__element">
          {user.username}
        </li>
        <li className="NavBar__element">
          <Link className="NavBar__link" to="/logout">
            Sign out
          </Link>
        </li>
      </ul>
    );
  } else {
    navLinks = (
      <ul className="NavBar__list">
        <li className="NavBar__element">
          <Link className="NavBar__link" to="/login">
            Sign in
          </Link>
        </li>
        <li className="NavBar__element">
          <Link className="NavBar__link" to="/register">
            Sign up
          </Link>
        </li>
      </ul>
    );
  }

  return (
    <nav className="NavBar">
      <Link className="NavBar__link" to="/govs">
        <h1 className="NavBar__title">GovRate</h1>
      </Link>
      {navLinks}
    </nav>
  );
};

export default NavBar;
