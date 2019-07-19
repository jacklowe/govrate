import React from "react";
import "./SearchBox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBox = ({ searchQuery, handleQueryChange }) => {
  const icon = <FontAwesomeIcon icon="faSearch" />;
  console.log(icon);
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
