import React from "react";

const Gov = props => {
  const id = props.match.params.id;
  // get gov reviews by id
  // so get request to /api/govs/1/reviews
  return <p>this is the gov component{id}</p>;
};

export default Gov;
