import React from "react";

const ValidationError = ({ error }) => {
  let content;
  content = error ? <p>{error}</p> : null;
  return content;
};

export default ValidationError;
