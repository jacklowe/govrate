import React from "react";
import "./validationError.css";

const ValidationError = ({ error }) => {
  let content;
  content = error ? <p className="ValidationError">{error}</p> : null;
  return content;
};

export default ValidationError;
