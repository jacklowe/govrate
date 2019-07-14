import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "../container/TableBody";

const GovsTable = ({ govs }) => {
  let content = (
    <table>
      <TableHeader />
      <TableBody govs={govs} />
    </table>
  );

  if (!govs[0])
    content = (
      <p>
        No matches
        <span role="img" aria-label="sad emoji">
          {" "}
          😞
        </span>
      </p>
    );

  return content;
};

export default GovsTable;
