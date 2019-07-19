import React from "react";
import "./TableHeader.css";

const TableHeader = () => (
  <thead className="TableHeader">
    <tr className="TableHeader__row">
      <td className="TableHeader__element">
        <strong>Country</strong>
      </td>
      <td className="TableHeader__element">
        <strong>Rating</strong>
      </td>
    </tr>
  </thead>
);

export default TableHeader;
