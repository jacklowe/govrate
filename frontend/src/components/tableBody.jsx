import React from "react";
import { Link } from "react-router-dom";

const TableBody = ({ govs }) => {
  const rows = govs.map(gov => {
    return (
      <tr key={gov.id}>
        <td>{gov.country}</td>
        <td>{gov.averageRating}</td>
        <td>
          <Link to="/login">
            <button>Review :)</button>
          </Link>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

export default TableBody;
