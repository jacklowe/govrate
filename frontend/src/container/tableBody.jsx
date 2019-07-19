import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchUser } from "../redux/actions/userActions";
import { connect } from "react-redux";
import Stars from "../components/Stars";
import Button from "../components/Button";
import "./TableBody.css";

const TableBody = ({ govs, currentUser, fetchUser }) => {
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const rows = govs.map(gov => {
    const { govId, country, averageRating } = gov;
    const linkAddress = currentUser ? `/govs/${govId}/reviews` : "/login";
    return (
      <tr className="TableBody__row" key={govId}>
        <td className="TableBody__element">
          <Link className="Link" to={`/govs/${govId}/reviews`}>
            {country}
          </Link>
        </td>
        <td className="TableBody__element">
          <Stars rating={averageRating} />
          {averageRating && (
            <span className="TableBody__average-rating">
              {" "}
              ({averageRating})
            </span>
          )}
        </td>
        <td className="TableBody__element TableBody__btn">
          <Link to={linkAddress}>
            <Button text={"Review"} />
          </Link>
        </td>
      </tr>
    );
  });

  return <tbody className="TableBody">{rows}</tbody>;
};

const mapStateToProps = state => {
  return { currentUser: state.user.currentUser, gov: state.govs.currentGov };
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
)(TableBody);
