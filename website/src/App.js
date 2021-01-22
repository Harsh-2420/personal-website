import React, { useRef, useEffect } from "react";
import "./App.css";
// import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { TweenMax, Power3 } from "gsap";

import { Jumbotron } from "./Components/Jumbotron";
import { Findr } from "./Components/Findr";
import { Fixit } from "./Components/Fixit";

function App() {
  window.scrollTo(0, 0);

  return (
    <div className="App">
      <Jumbotron />
      <Findr />
      <Fixit />
    </div>
  );
}

export default App;
