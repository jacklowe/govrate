import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import NavBar from "./components/common/navBar";
import Footer from "./components/common/footer";
import RegisterForm from "./components/common/registerForm";
import NotFound from "./components/common/notFound";
import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <NavBar user={"jack"} />
      <main className="container">
        <Switch>
          <Route exact path="/" component={NavBar} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default App;
