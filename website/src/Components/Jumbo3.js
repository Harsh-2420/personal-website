import React, { useEffect, useRef } from "react";
import "../App2.scss";
import { TimelineLite, TweenMax, Power3 } from "gsap";
import $ from "jquery";
import Chart from "chart.js";

export const Jumbotron = () => {
  return (
    <div className="hero">
      <div className="container">
        <h1>
          <div className="name">
            <div className="name-1">HARSH</div>
            <div className="name-2">JHUNJHUN-</div>
            <div className="name-3">WALA</div>
          </div>
        </h1>
        <div className="title"> Data Scientist</div>
        <div className="bb"></div>
      </div>
    </div>
  );
};
