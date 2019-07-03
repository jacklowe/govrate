import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ user }) => {
  const notAuthenticated = (
    <ul>
      <li>
        <Link to="/login">Log in</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
    </ul>
  );

  const authenticated = (
    <ul>
      <li>{user}</li>
      <li>
        <Link to="/logout">Log Out</Link>
      </li>
    </ul>
  );

  return (
    <nav>
      <Link to="/govs">GovRate</Link>
      {user ? authenticated : notAuthenticated}
    </nav>
  );
};

export default NavBar;
