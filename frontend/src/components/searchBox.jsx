import React from "react";

const SearchBox = ({ searchQuery, handleQueryChange }) => {
  console.log(searchQuery);
  return (
    <input
      type="text"
      value={searchQuery}
      onChange={handleQueryChange}
      placeholder="Search..."
    />
  );
};

export default SearchBox;
