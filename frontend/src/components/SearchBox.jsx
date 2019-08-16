import React from "react";
import "./SearchBox.css";

const SearchBox = ({ searchQuery, handleQueryChange }) => {
  return (
    <input
      className="SearchBox"
      type="text"
      value={searchQuery}
      onChange={handleQueryChange}
      placeholder="Search..."
    />
  );
};

export default SearchBox;
