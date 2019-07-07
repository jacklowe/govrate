import React from "react";
import { Link } from "react-router-dom";

const TableBody = ({ govs }) => {
  console.log(govs);
  const rows = govs.map(gov => {
    const { govId, country, averageRating } = gov;
    return (
      <tr key={govId}>
        <td>
          <Link to={`/govs/${govId}/reviews`}>{country}</Link>
        </td>
        <td>{averageRating}</td>
        <td>
          <Link to="/login">
            <button>Review</button>
          </Link>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

export default TableBody;
