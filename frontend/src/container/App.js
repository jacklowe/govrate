import React, { useEffect } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Navigation from "../components/Navigation";
import Govs from "../components/Govs";
import Footer from "../components/Footer";
import RegisterForm from "../components/RegisterForm";
import LoginForm from "../components/LoginForm";
import Logout from "../components/Logout";
import NotFound from "../components/NotFound";
import GovReviews from "../components/GovReviews";
import ReviewForm from "./ReviewForm";
import "./App.css";

/* REDUX STUFF */
import { connect } from "react-redux";
import { fetchUser } from "../redux/actions/userActions";
import { fetchGov } from "../redux/actions/govActions";

/* ICON STUFF*/
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStar,
  faStarHalfAlt,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faStar as faStarReg } from "@fortawesome/free-regular-svg-icons";
library.add(faStar, faStarReg, faStarHalfAlt, faGithub, faSearch);

const App = ({ fetchUser, currentUser }) => {
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <div className="App">
      <Navigation user={currentUser} />
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
    </div>
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
