import React from "react";
import { Link } from "react-router-dom";

const TableBody = ({ govs }) => {
  const rows = govs.map(gov => (
    <tr key={gov.id}>
      <td>
        <Link to={`/govs/${gov.id}`}>{gov.country}</Link>
      </td>
      <td>{gov.averageRating}</td>
      <td>
        <Link to="/login">
          <button>Review</button>
        </Link>
      </td>
    </tr>
  ));

  return <tbody>{rows}</tbody>;
};

export default TableBody;
