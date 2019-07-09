import React, { useState } from "react";
import { Link } from "react-router-dom";
import Message from "./message";
import Input from "./formInput";
import StarsInput from "./stars";

const ReviewForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rating, setRating] = useState(1);
  const [reviewBody, setReviewBody] = useState("");

  const handleRatingChange = rating => {
    setRating(rating);
    console.log(rating);
  };

  const handleReviewBodyChange = e => {
    setReviewBody(e.target.value);
  };

  const handleSubmit = e => {
    alert(`${username} ${rating} ${reviewBody}`);
  };

  return (
    <React.Fragment>
      <Message message="Write a revieww" />
      <form onSubmit={handleSubmit}>
        <StarsInput rating={rating} handleRatingChange={handleRatingChange} />
        <label htmlFor="review">Enter your review text here:</label>
        <textarea
          id="review"
          name="review-body"
          rows="5"
          cols="33"
          value={reviewBody}
          onChange={handleReviewBodyChange}
        />
        <input htmlFor="submit" type="submit" value="Sign up" />
        <p>
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </form>
    </React.Fragment>
  );
};

export default ReviewForm;
