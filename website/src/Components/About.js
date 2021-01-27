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
        <Col md={3}></Col>
        <Col md={6}>
          <div class="container-inner">
            <div class="about-title">Who am I</div>
            <div class="about-desc">
              I'm an entrepreneur, a tech head and an aspiring Data Scientist
              <br />- <br />I love having control - I mean who doesn't - but
              what I mean is having control over the process. This website for
              example - I control the design and the architecture. For my
              projects, I try to streamline the process to make the different
              teams work in tandem.
              <br />
              This is what draws me towards data. Working with big data provides
              the kind of control I like. The feeling of being overwhelmed by
              millions of datapoints and making sense of it. Manipulating it and
              visualising it to make algorithms - It makes me feel alive!
            </div>
          </div>
        </Col>
        <Col md={3}></Col>
      </div>
    </header>
  );
};
