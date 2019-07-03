import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import NavBar from "./components/common/navBar";
import Footer from "./components/common/footer";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar user={"jack"} />
      <main className="container">
        <Switch>
          <Route path="/" component={NavBar} />
        </Switch>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
