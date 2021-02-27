import React, { useRef, useEffect, useState } from "react";
import findrLogo from "../Images/findrLogo.svg";
import { Row, Col } from "react-bootstrap";
import { gsap, TweenMax, TimelineLite, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import $ from "jquery";
import { FindrProj } from "./Projects/Findr";

export const Findr = () => {
  gsap.registerPlugin(ScrollTrigger);
  const logoItem = useRef(null);
  let content = useRef(null);
  let tl = new TimelineLite({ delay: 0.8 });

  useEffect(() => {
    gsap.from(".findrLogo", {
      y: 44,
      duration: 1.7,
      scrollTrigger: {
        trigger: ".findrLogo",
        start: "center 600px",
        toggleActions: "play none none none",
      },
      ease: Power3.easeOut,
      opacity: 0.1,
    });
    gsap.from(".findr-content-inner", {
      y: 44,
      duration: 1.7,
      scrollTrigger: {
        trigger: ".findrLogo",
        start: "center 600px",
        toggleActions: "play none none none",
      },
      ease: Power3.easeOut,
      opacity: 0.1,
    });

    gsap.from(".side-head", {
      x: 54,
      duration: 1.3,
      scrollTrigger: {
        trigger: ".side-head",
        start: "center 600px",
        toggleActions: "play none none none",
      },
      ease: Power3.easeOut,
      opacity: 0.2,
    });
    gsap.from(".side-head-2", {
      x: -54,
      duration: 1.3,
      scrollTrigger: {
        trigger: ".side-head",
        start: "center 600px",
        toggleActions: "play none none none",
      },
      ease: Power3.easeOut,
      opacity: 0.2,
    });
  }, []);

  return (
    <header className="findr">
      <div className="findr-container">
        <Row>
          <img
            ref={logoItem}
            src={findrLogo}
            className="findrLogo"
            style={{ cursor: "pointer" }}
          />
        </Row>
        <Row>
          <div className="findr-content-inner">
            <div className="findr-content-line">
              <FindrProj />
            </div>
          </div>

          {/* <div class="side-head">EXPERIENCE</div>
          <div class="side-head-2">EXPERIENCE</div> */}
        </Row>
      </div>
    </header>
  );
};
