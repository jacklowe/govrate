import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./scss/App.scss";

// ReactDOM.render(
//   <Router>
//     <App />
//   </Router>,
//   document.getElementById("app")
// );

ReactDOM.render(
  <Router>
    <Route path="/" component={"hi"} />
    <Route path="/register" component={"hello"} />
    <Route path="/example" component={"luls"} />
  </Router>,
  document.getElementById("app")
);
