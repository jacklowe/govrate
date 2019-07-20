import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchGov } from "../redux/actions/govActions";
import ValidationError from "../components/ValidationError";
import { postReview } from "../services/reviewService";
import Stars from "../components/Stars";
import validate from "../services/validationService";
import Joi from "joi-browser";
import "./ReviewForm.css";

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

  const schema = {
    reviewBody: Joi.string()
      .allow("")
      .max(1000)
      .label("Review")
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
    setErrors({});
    e.preventDefault();

    const errors = validate({ reviewBody }, schema);

    setErrors(errors || {});
    if (errors) return;

    doSubmit();
  };

  return (
    <div className="ReviewForm">
      <h2 className="ReviewForm__title">{gov.country}</h2>
      <form className="ReviewForm__form" onSubmit={handleSubmit}>
        <div className="ReviewForm__label">
          <ValidationError className="Form__validation" error={errors.main} />
          <label htmlFor="rating">Click on your desired star rating:</label>
        </div>
        <Stars
          name="rating"
          rating={rating}
          handleRatingChange={handleRatingChange}
        />
        <div className="ReviewForm__label">
          <label htmlFor="review">Enter your review in the box:</label>
        </div>
        <ValidationError
          className="Form__validation"
          error={errors.reviewBody}
        />
        <textarea
          className="ReviewForm__text-area"
          id="review"
          name="review-body"
          rows="5"
          cols="33"
          value={reviewBody}
          onChange={handleReviewBodyChange}
        />{" "}
        <br />
        <input
          className="Form__button-input Button"
          htmlFor="submit"
          placeholder=""
          type="submit"
          value="Submit"
        />
      </form>
      <p>
        Already reviewed this State? You can't do it twice{" "}
        <span role="img" aria-label="emoji">
          😔
        </span>
      </p>
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
