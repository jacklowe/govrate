import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchUser } from "../redux/actions/userActions";
import { connect } from "react-redux";
import Stars from "../components/Stars";

const TableBody = ({ govs, currentUser, fetchUser }) => {
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const rows = govs.map(gov => {
    const { govId, country, averageRating } = gov;
    const linkAddress = currentUser ? `/govs/${govId}/reviews` : "/login";
    return (
      <tr key={govId}>
        <td>
          <Link to={`/govs/${govId}/reviews`}>{country}</Link>
        </td>
        <td>
          <Stars rating={averageRating} />
          {averageRating && <span> ({averageRating})</span>}
        </td>
        <td>
          <Link to={linkAddress}>
            <button>Review</button>
          </Link>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
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
