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

const App = () => {
  return (
    <React.Fragment>
      <NavBar user={null} />
      <main className="container">
        <Switch>
          <Route exact path="/govs" component={Govs} />
          <Route path="/govs/:id/reviews" component={GovReviews} />
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
