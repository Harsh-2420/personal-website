import React, { useRef, useEffect, useState } from "react";
// import { Container, Row, Col, Fade } from "react-bootstrap";
import findrLogo from "../Images/uoft.png";

import { gsap } from "gsap";

export const Findr = () => {
  const logoItem = useRef(null);

  useEffect(() => {
    gsap.to(".findrLogo", {
      x: 100,
      duration: 5,
      scrollTrigger: {
        trigger: ".findrLogo",
        markers: true,
        start: "top center",
        end: "bottom 80px",
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
