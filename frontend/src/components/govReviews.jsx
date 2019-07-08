import React, { useEffect, useState } from "react";
import { getReviews } from "../services/reviewService";
import { getGov } from "../services/govService";

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
        <h3>
          {review.username}: {review.rating}
        </h3>
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
