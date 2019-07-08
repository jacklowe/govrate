import React from "react";
import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";
import NavBar from "./components/navBar";
import Govs from "./components/govs";
import Footer from "./components/footer";
import RegisterForm from "./components/registerForm";
import LoginForm from "./components/loginForm";
import Logout from "./components/logout";
import NotFound from "./components/notFound";
import GovReviews from "./components/govReviews";
import ReviewForm from "./components/reviewForm";

/* ICON STUFF*/
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faStar as faStarReg } from "@fortawesome/free-regular-svg-icons";
library.add(faStar, faStarReg, faStarHalfAlt, faGithub);

const App = () => {
  return (
    <React.Fragment>
      <NavBar user={null} />
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

export default App;
