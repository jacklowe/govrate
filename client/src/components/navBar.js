import React from "react";

const NavBar = ({ user }) => {
  return (
    <nav>
      <h1>Govrate</h1>
      <ul>
        {!user && (
          <React.Fragment>
            <li>login</li>
            <li>register</li>
          </React.Fragment>
        )}
        {user && <li>{user}</li>}
      </ul>
    </nav>
  );
};

export default NavBar;
