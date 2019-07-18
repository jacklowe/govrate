import React from "react";
import { Link } from "react-router-dom";
import "./NavMenu.css";

const NavMenu = ({ show, user, handleNavClick }) => {
  let navLinks;
  let navClasses = "NavBar__list";
  if (show) {
    navClasses = "NavBar__list open";
  }

  if (user) {
    navLinks = (
      <ul className={navClasses}>
        <li onClick={handleNavClick} className="NavBar__element">
          <Link className="NavBar__link Link" to="/logout">
            Sign out
          </Link>
        </li>
        <li className="NavBar__element">{user.username}</li>
      </ul>
    );
  } else {
    navLinks = (
      <ul className={navClasses}>
        <li onClick={handleNavClick} className="NavBar__element">
          <Link className="NavBar__link Link" to="/login">
            Sign in
          </Link>
        </li>
        <li onClick={handleNavClick} className="NavBar__element">
          <Link className="NavBar__link Link" to="/register">
            Sign up
          </Link>
        </li>
      </ul>
    );
  }

  return navLinks;
};

export default NavMenu;
