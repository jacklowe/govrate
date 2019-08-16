import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Footer.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="Footer">
      <p className="Footer__text">GovRate, {year}.</p>
      <a className="Footer__icon" href="https://github.com/jacklowe/govrate">
        <FontAwesomeIcon icon={["fab", "github"]} />
      </a>
    </footer>
  );
};

export default Footer;
