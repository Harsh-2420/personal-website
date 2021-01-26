import React, { useRef, useEffect, useState } from "react";
// import { Container, Row, Col, Fade } from "react-bootstrap";
import findrLogo from "../Images/findrLogo.svg";

import { gsap, TweenMax, TimelineLite } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Findr = () => {
  gsap.registerPlugin(ScrollTrigger);
  const logoItem = useRef(null);
  let content = useRef(null);
  let tl = new TimelineLite({ delay: 0.8 });

  useEffect(() => {
    // content vars
    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;

    gsap.to(".findrLogo", {
      x: -400,
      scale: 0.6,
      duration: 3,
      scrollTrigger: {
        trigger: ".findrLogo",
        markers: true,
        start: "top 600px",
        end: "bottom 150px",
        scrub: true,
      },
    });
  }, []);

  return (
    <header className="findr">
      <div className="container">
        <img ref={logoItem} src={findrLogo} className="findrLogo" />
        <div className="findr-content">
          <div className="findr-content-inner" ref={(el) => (content = el)}>
            <h1>
              <div className="findr-content-line">
                <div className="findr-content-line-inner">
                  - developed a mobile application that helps students find
                  study partners for courses, hackathons and competitions.
                </div>
              </div>
              <div className="findr-content-line">
                <div className="findr-content-line-inner">- JHUNJHUNWALA</div>
              </div>
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};
