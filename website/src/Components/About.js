import React, { useRef, useEffect, useState } from "react";
// import { Container, Row, Col, Fade } from "react-bootstrap";
import findrLogo from "../Images/findrLogo.svg";
import { Row, Col } from "react-bootstrap";

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
        <Col md={4}>
          {/* <div class="side-head">ABOUT</div>
        <div class="side-head-2">ABOUT</div> */}
        </Col>
        <Col md={4}>
          <div class="container-inner">
            <div class="about-title">Who am I</div>
            <div class="about-desc">
              I'm an entrepreneur, a tech head and an aspiring Data Scientist
            </div>
          </div>
        </Col>
        <Col md={4}></Col>
      </div>
    </header>
  );
};
