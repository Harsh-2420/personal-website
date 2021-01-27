import React, { useRef, useEffect } from "react";
import "./App.css";
// import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { TweenMax, Power3 } from "gsap";

import { Jumbotron } from "./Components/Jumbo3";
import { Findr } from "./Components/Findr";
import { Fixit } from "./Components/Fixit";
import { About } from "./Components/About";
import { Navbar } from "./Components/Navbar";
import { Projects } from "./Components/allProjects";
// import { Project } from "./Components/Project";

function App() {
  window.scrollTo(0, 0);

  return (
    <div className="App">
      {/* <Navbar /> */}
      <Jumbotron />
      <About />
      <Findr />
      <Fixit />
      <Projects />
      {/* <Project /> */}
    </div>
  );
}

export default App;
