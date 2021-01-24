import React, { useRef, useEffect, useState } from "react";
// import { Container, Row, Col, Fade } from "react-bootstrap";
import findrLogo from "../Images/findrLogo.svg";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const About = () => {
  gsap.registerPlugin(ScrollTrigger);
  const rectangle = useRef(null);

  useEffect(() => {
    gsap.to(".rectangle", {
      scaleY: 1.6,
      duration: 0.1,
      scrollTrigger: {
        trigger: ".rectangle",
        markers: true,
        start: "top 600px",
        end: "bottom 150px",
        toggleActions: "restart none none reset",
      },
    });
  }, []);

  return (
    <header className="findr">
      <div class="container">
        <div ref={rectangle} class="rectangle"></div>
      </div>
    </header>
  );
};
