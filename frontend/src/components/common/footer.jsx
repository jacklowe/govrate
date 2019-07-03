import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer>
      <p>&copy; GovRate {year}</p>
      <p>
        <a href="https://github.com/jacklowe/govrate">github icon</a>
      </p>
    </footer>
  );
};

export default Footer;
