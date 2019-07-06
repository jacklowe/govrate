import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

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
        No matching Govs{" "}
        <span role="img" aria-label="sad emoji">
          {" "}
          😞
        </span>
      </p>
    );

  return content;
};

export default GovsTable;
