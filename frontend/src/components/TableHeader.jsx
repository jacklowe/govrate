import React from "react";
import "./TableHeader.css";

const TableHeader = () => (
  <thead className="TableHeader">
    <tr className="TableHeader__row">
      <td className="TableHeader__element">
        <strong>Country</strong>
      </td>
      <td className="tableheader__element">
        <strong>Av. rating</strong>
      </td>
      <td className="tableheader__element" />
    </tr>
  </thead>
);

export default TableHeader;
