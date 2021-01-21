import React from "react";
import "./App.css";
// import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { Jumbotron } from "./Components/Jumbotron";

function App() {
  window.scrollTo(0, 0);
  return (
    <div className="App">
      <Jumbotron />
    </div>
  );
}

export default App;
