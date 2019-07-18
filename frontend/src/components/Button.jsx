import React from "react";
import "./Button.css";

const Button = ({ text }) => {
  return (
    <button className="Button">
      <span className="Button__text">{text}</span>
    </button>
  );
};

export default Button;
