import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchGov } from "../redux/actions/govActions";
import { postReview } from "../services/reviewService";
import Message from "../components/message";
import Stars from "../components/stars";

const ReviewForm = ({ fetchGov, gov, match, history }) => {
  const id = match.params.id;
  const [rating, setRating] = useState(3);
  const [reviewBody, setReviewBody] = useState("");

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
    } catch (e) {
      console.error(e);
    }
    history.push(`/govs/${id}/reviews`);
  };

  const handleSubmit = e => {
    // validation
    e.preventDefault();

    doSubmit();
  };

  return (
    <React.Fragment>
      <h3>{gov.country}</h3>
      <Message message="Write a review 👊" />
      <form onSubmit={handleSubmit}>
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
    </React.Fragment>
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
