import React, { useEffect } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import NavBar from "../components/navBar";
import Govs from "../components/govs";
import Footer from "../components/footer";
import RegisterForm from "../components/registerForm";
import LoginForm from "../components/loginForm";
import Logout from "../components/logout";
import NotFound from "../components/notFound";
import GovReviews from "../components/govReviews";
import ReviewForm from "./reviewForm";
import "./App.css";

/* REDUX STUFF */
import { connect } from "react-redux";
import { fetchUser } from "../redux/actions/userActions";
import { fetchGov } from "../redux/actions/govActions";

/* ICON STUFF*/
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faStar as faStarReg } from "@fortawesome/free-regular-svg-icons";
library.add(faStar, faStarReg, faStarHalfAlt, faGithub);

const App = ({ fetchUser, currentUser }) => {
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <React.Fragment>
      <NavBar user={currentUser} />
      <main className="container">
        <Switch>
          <Route path="/govs/:id/reviews/new" component={ReviewForm} />
          <Route path="/govs/:id/reviews" component={GovReviews} />
          <Route path="/govs" component={Govs} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/logout" component={Logout} />
          <Route path="/not-found" component={NotFound} />

          {/* Redirects */}
          <Redirect from="/" exact to="/govs" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
      <Footer />
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return { currentUser: state.user.currentUser, gov: state.govs.currentGov };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: () => {
      dispatch(fetchUser());
    },
    fetchGov: id => {
      dispatch(fetchGov(id));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
