import React from "react";

const Input = ({ type, name, placeholder, value, onChange, htmlFor }) => {
  return (
    <label htmlFor={htmlFor}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default Input;
