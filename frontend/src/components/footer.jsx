import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Footer.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="Footer">
      <p>GovRate, {year}.</p>
      <p>
        <a href="https://github.com/jacklowe/govrate">
          <FontAwesomeIcon icon={["fab", "github"]} />
        </a>
      </p>
    </footer>
  );
};

export default Footer;
