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
      scaleY: 2,
      duration: 0.2,
      scrollTrigger: {
        trigger: ".rectangle",
        markers: true,
        start: "center 600px",
        end: "bottom 150px",
        toggleActions: "restart none none reverse",
      },
    });
  }, []);

  return (
    <header className="about">
      <div class="container">
        <div ref={rectangle} className="rectangle"></div>
        <div className="line1"></div>
        <div className="line2"></div>
      </div>
    </header>
  );
};
