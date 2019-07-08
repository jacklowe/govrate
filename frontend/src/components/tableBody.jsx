import React from "react";
import { Link } from "react-router-dom";
import StarRating from "./starRating";

const TableBody = ({ govs }) => {
  const rows = govs.map(gov => {
    const { govId, country, averageRating } = gov;
    return (
      <tr key={govId}>
        <td>
          <Link to={`/govs/${govId}/reviews`}>{country}</Link>
        </td>
        <td>
          <StarRating averageRating={averageRating} />
          {averageRating && <span> ({averageRating})</span>}
        </td>
        <td>
          <Link to={`/govs/${govId}/reviews/new`}>
            <button>Review</button>
          </Link>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

export default TableBody;
