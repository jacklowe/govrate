import React from "react";

const NavMenu = ({ show }) => {
  let content;

  if (show) {
    content = <div>this is the navmenu</div>;
  } else {
    content = <div>navmenu not shown</div>;
  }
  return content;
};

export default NavMenu;
