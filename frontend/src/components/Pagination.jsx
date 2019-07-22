import React from "react";

const Pagination = ({ handlePageChange, currentPage }) => {
  return (
    <ul className="Govs__pagination-list">
      <li>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="Govs__pagination-button Link"
        >
          ❮
        </button>
      </li>
      <li className="Govs__pagination-number">{currentPage}</li>
      <li>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="Govs__pagination-button Link"
        >
          ❯
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
