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
      //   scale: 0.6,
      transformOrigin: "50% bottom",
      duration: 1,
      scrollTrigger: {
        trigger: ".rectangle",
        markers: true,
        start: "top 600px",
        end: "bottom 150px",
        // scrub: true,
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
