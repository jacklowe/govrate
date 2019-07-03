import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import NavBar from "./components/common/navBar";
import Govs from "./components/govs";
import Footer from "./components/common/footer";
import RegisterForm from "./components/common/registerForm";
import LoginForm from "./components/common/loginForm";
import Logout from "./components/common/logout";
import NotFound from "./components/common/notFound";
import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <NavBar user={"jack"} />
      <main className="container">
        <Switch>
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
