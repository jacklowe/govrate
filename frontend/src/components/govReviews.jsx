import React, { useEffect, useState } from "react";
import { getReviews } from "../services/reviewService";
import { getGov } from "../services/govService";
import Stars from "./stars";

const GovReviews = props => {
  const id = props.match.params.id;
  const [reviews, setReviews] = useState([]);
  const [gov, setGov] = useState("");

  const fetchGov = async id => {
    const { data } = await getGov(id);
    return data;
  };

  const fetchReviews = async id => {
    const { data } = await getReviews(id);
    return data;
  };

  useEffect(() => {
    fetchReviews(id).then(r => setReviews(r));
    fetchGov(id).then(g => setGov(g));
  }, [id]);

  let reviewElement = reviews.map(review => {
    return (
      <React.Fragment key={review.id}>
        <h3>{review.username}</h3>
        <span>
          <Stars rating={review.rating} /> <span>({review.rating})</span>
        </span>
        <p>{review.body}</p>
      </React.Fragment>
    );
  });

  return (
    <React.Fragment>
      <h2>{gov.country}</h2>
      {reviewElement}
    </React.Fragment>
  );
};

export default GovReviews;
