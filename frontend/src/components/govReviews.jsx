import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "../redux/actions/userActions";
import { getReviews } from "../services/reviewService";
import { getGov } from "../services/govService";
import Stars from "./Stars";
import Button from "./Button";
import "./GovReviews.css";

const GovReviews = ({ match, currentUser }) => {
  const id = match.params.id;
  const [reviews, setReviews] = useState([]);
  const [gov, setGov] = useState("");

  const fetchGov = async id => {
    const { data: gov } = await getGov(id);
    return gov;
  };

  const fetchReviews = async id => {
    const { data: reviews } = await getReviews(id);
    return reviews;
  };

  useEffect(() => {
    fetchReviews(id).then(r => setReviews(r));
    fetchGov(id).then(g => setGov(g));
    fetchUser();
  }, [id]);

  let titleStars = <Stars rating={gov.averageRating} />;

  let reviewElement = reviews.map(review => {
    const { reviewId: id } = review;
    return (
      <div key={id} className="Reviews__review">
        <h3>{review.username}</h3>
        <span>
          <Stars rating={review.rating} /> <span>({review.rating})</span>
        </span>
        <p>{review.body}</p>
      </div>
    );
  });

  const linkAddress = currentUser ? `/govs/${id}/reviews/new` : "/login";
  return (
    <div className="Reviews">
      <h2 className="Reviews__title">{gov.country}</h2>
      <p className="Reviews__average-rating">
        {titleStars} ({gov.averageRating})
      </p>
      {reviewElement}
      <div className="Reviews__button">
        <Link to={linkAddress}>
          <Button text={"Write your own!"} />
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { currentUser: state.user.currentUser };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: () => {
      dispatch(fetchUser());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GovReviews);
