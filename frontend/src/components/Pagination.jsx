import React from "react";
import "./Pagination.css";

const Pagination = ({ handlePageChange, currentPage }) => {
  return (
    <ul className="Pagination-list">
      <li>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="Pagination-button Link"
        >
          ❮
        </button>
      </li>
      <li className="Pagination-number">{currentPage}</li>
      <li>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="Pagination-button Link"
        >
          ❯
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
