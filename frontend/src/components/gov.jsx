import React, { useEffect, useState } from "react";
import { getReviews } from "../services/reviewService";

const Gov = props => {
  const id = props.match.params.id;
  const [reviews, setReviews] = useState([]);
  // get gov reviews by id
  // so get request to /api/govs/1/reviews

  const fetchReviews = async id => {
    const { data } = await getReviews(id);
    return data;
  };

  useEffect(() => {
    fetchReviews(id).then(r => setReviews(r));
  }, [id]);

  console.log(reviews);
  return <p>this is the gov component{id}</p>;
};

export default Gov;
