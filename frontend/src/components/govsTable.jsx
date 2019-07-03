import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const GovsTable = ({ govs }) => {
  return (
    <table>
      <TableHeader />
      <TableBody govs={govs} />
    </table>
  );
};

export default GovsTable;
