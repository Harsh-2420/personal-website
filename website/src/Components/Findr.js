import React, { useRef, useEffect, useState } from "react";
// import { Container, Row, Col, Fade } from "react-bootstrap";
import findrLogo from "../Images/findrLogo.svg";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Findr = () => {
  gsap.registerPlugin(ScrollTrigger);
  const logoItem = useRef(null);

  useEffect(() => {
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
      <div class="container">
        <img ref={logoItem} src={findrLogo} className="findrLogo" />
      </div>
    </header>
  );
};
