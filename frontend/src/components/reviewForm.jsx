import React, { useState } from "react";
import Message from "./message";
import Stars from "./stars";

const ReviewForm = ({ props }) => {
  const [rating, setRating] = useState(3);
  const [reviewBody, setReviewBody] = useState("");
  // i need the gov info hereeeeeeeeeee reeeeeeeeee

  const handleRatingChange = rating => {
    setRating(rating);
  };

  const handleReviewBodyChange = e => {
    setReviewBody(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(`${rating} ${reviewBody}`);
  };

  return (
    <React.Fragment>
      <Message message="Write a review 👊" />
      <form onSubmit={handleSubmit}>
        <label htmlFor="rating">Click on your desired star rating</label>
        <Stars
          name="rating"
          rating={rating}
          handleRatingChange={handleRatingChange}
        />
        <label htmlFor="review">Enter your review in the text box</label>
        <textarea
          id="review"
          name="review-body"
          rows="5"
          cols="33"
          value={reviewBody}
          onChange={handleReviewBodyChange}
        />
        <input htmlFor="submit" type="submit" value="Sign up" />
      </form>
      <p>Already reviewed this State? You can't do it twice!</p>
    </React.Fragment>
  );
};

export default ReviewForm;
