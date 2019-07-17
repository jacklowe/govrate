import React from "react";
import { Link } from "react-router-dom";
import "./NavMenu.css";

const NavMenu = ({ show, user }) => {
  let navLinks;
  let navClasses = "NavBar__list";
  if (show) {
    navClasses = "NavBar__list open";
  }

  if (user) {
    navLinks = (
      <ul className={navClasses}>
        <li className="NavBar__element">{user.username}</li>
        <li className="NavBar__element">
          <Link className="NavBar__link" to="/logout">
            Sign out
          </Link>
        </li>
      </ul>
    );
  } else {
    navLinks = (
      <ul className={navClasses}>
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

  return navLinks;
};

export default NavMenu;
