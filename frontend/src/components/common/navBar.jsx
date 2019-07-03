import React from "react";

const NavBar = ({ user }) => {
  const notAuthenticated = (
    <ul>
      <li>login</li>
      <li>signup</li>
    </ul>
  );

  const authenticated = (
    <ul>
      <li>{user}</li>
    </ul>
  );

  return (
    <nav>
      <a href="#">GovRate</a>
      {user ? authenticated : notAuthenticated}
    </nav>
  );
};

export default NavBar;
