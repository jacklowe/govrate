import React from "react";
import "./Button.css";

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="Button">
      <span className="Button__text">{text}</span>
    </button>
  );
};

export default Button;
