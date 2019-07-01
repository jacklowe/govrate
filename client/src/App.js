import React from "react";
import NavBar from "./components/navBar";

const App = () => {
  return (
    <React.Fragment>
      <NavBar user={""} />
      <main className="container">
        <p>govs table</p>
      </main>
      <footer>copyright govrate... github linx</footer>
    </React.Fragment>
  );
};

export default App;
