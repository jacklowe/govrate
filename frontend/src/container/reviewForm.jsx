import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchGov } from "../redux/actions/govActions";
import ValidationError from "../components/ValidationError";
import { postReview } from "../services/reviewService";
import Message from "../components/Message";
import Stars from "../components/Stars";

const ReviewForm = ({ fetchGov, gov, match, history }) => {
  const id = match.params.id;
  const [rating, setRating] = useState(3);
  const [reviewBody, setReviewBody] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetchGov(id);
  }, [id, fetchGov]);

  const handleRatingChange = rating => {
    setRating(rating);
  };

  const handleReviewBodyChange = e => {
    setReviewBody(e.target.value);
  };

  const doSubmit = async () => {
    try {
      await postReview(rating, reviewBody, id);
      history.push(`/govs/${id}/reviews`);
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        setErrors({ main: ex.response.data });
      }
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    doSubmit();
  };

  return (
    <div>
      <h3>{gov.country}</h3>
      <Message message="Write a review 👊" />
      <form onSubmit={handleSubmit}>
        <ValidationError error={errors.main} />
        <label htmlFor="rating">Click on your desired star rating:</label>
        <br />
        <Stars
          name="rating"
          rating={rating}
          handleRatingChange={handleRatingChange}
        />
        <br />
        <label htmlFor="review">Enter your review in the box:</label>
        <br />
        <textarea
          id="review"
          name="review-body"
          rows="5"
          cols="33"
          value={reviewBody}
          onChange={handleReviewBodyChange}
        />{" "}
        <br />
        <input htmlFor="submit" type="submit" value="Submit" />
      </form>
      <p>Already reviewed this State? You can't do it twice!</p>
    </div>
  );
};

const mapStateToProps = state => {
  return { gov: state.govs.currentGov };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchGov: id => {
      dispatch(fetchGov(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
