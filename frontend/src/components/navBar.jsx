import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ user }) => {
  let navLinks;

  if (user) {
    navLinks = (
      <ul>
        <li>{user.username}</li>
        <li>
          <Link to="/logout">Sign out</Link>
        </li>
      </ul>
    );
  } else {
    navLinks = (
      <ul>
        <li>
          <Link to="/login">Sign in</Link>
        </li>
        <li>
          <Link to="/register">Sign up</Link>
        </li>
      </ul>
    );
  }

  return (
    <nav>
      <Link to="/govs">
        <h1>GovRate</h1>
      </Link>
      {navLinks}
    </nav>
  );
};

export default NavBar;
