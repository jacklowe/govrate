import React, { useState } from "react";
import NavMenu from "./NavMenu";
import NavBar from "./NavBar";

const Navigation = ({ user }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuState = () => {
    let menuState = !menuOpen;
    setMenuOpen(menuState);
  };

  return (
    <div>
      <NavBar handleMenuClick={handleMenuState} />
      <NavMenu user={user} show={menuOpen} />
    </div>
  );
};

export default Navigation;
