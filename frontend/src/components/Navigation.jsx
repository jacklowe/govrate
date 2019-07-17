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
    <header>
      <NavBar handleMenuClick={handleMenuState} open={menuOpen} />
      <NavMenu handleNavClick={handleMenuState} user={user} show={menuOpen} />
    </header>
  );
};

export default Navigation;
