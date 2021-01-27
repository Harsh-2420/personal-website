import React, { useEffect, useRef } from "react";
import "../App2.scss";
import Chart from "chart.js";
import { gsap, TweenMax, TimelineLite, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Jumbotron = () => {
  let content = useRef(null);
  let tl = new TimelineLite({ delay: 0.8 });

  useEffect(() => {
    tl.staggerFrom(
      [".name-1", ".name-2"],
      1,
      {
        y: 44,
        ease: Power3.easeOut,
        opacity: 0,
      },
      0.15,
      "Start"
    ).from(".title", 1, { y: -20, opacity: 0, ease: Power3.easeOut }, "Start");
  }, [tl]);
  return (
    <div className="hero">
      <div className="container" ref={content}>
        <h1>
          <div className="name">
            <div className="name-1">HARSH</div>
            <div className="name-2">JHUNJHUNWALA</div>
            {/* <div className="name-3">WALA</div> */}
          </div>
        </h1>
        <div className="title"> Data Scientist</div>
        {/* <div className="bb"></div> */}
      </div>
    </div>
  );
};
