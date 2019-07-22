import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "../redux/actions/userActions";
import { getReviews } from "../services/reviewService";
import { getGov } from "../services/govService";
import Stars from "./Stars";
import getPage from "../utils/paginate";
import Pagination from "./Pagination";
import "./GovReviews.css";

const GovReviews = ({ match, currentUser }) => {
  const id = match.params.id;
  const [reviews, setReviews] = useState([]);
  const [gov, setGov] = useState("");
  const [pagedReviews, setPagedReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageLength = 5;

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

    const pagedGovs = getPage(reviews, currentPage, pageLength);

    setPagedReviews(pagedGovs);
  }, [id, currentPage, reviews]);

  const maxPage = Math.ceil(reviews.length / pageLength);
  const handlePageChange = newPage => {
    if (newPage < 1 || newPage > maxPage) return null;
    setCurrentPage(newPage);
  };

  let titleStars = <Stars rating={gov.averageRating} />;

  let reviewElement = pagedReviews.map(review => {
    const { reviewId: id } = review;
    return (
      <div key={id} className="Reviews__review">
        <h3 className="Reviews__username">{review.username}</h3>
        <span className="Reviews__rating">
          <Stars rating={review.rating} />{" "}
          <span className="Reviews__rating-text">({review.rating})</span>
        </span>
        <p className="Reviews__body">{review.body}</p>
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
      <p className="Reviews__subtitle">
        Here are the reviews...{" "}
        <span role="img" aria-label="emoji">
          😬
        </span>
      </p>
      {reviewElement}
      <div className="Reviews__button">
        <Pagination
          handlePageChange={handlePageChange}
          currentPage={currentPage}
        />
        <Link to={linkAddress}>
          <button className="Button">
            <span className="Button__text">Write your own!</span>
          </button>
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
