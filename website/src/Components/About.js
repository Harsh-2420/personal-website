import React, { useRef, useEffect, useState } from "react";
// import { Container, Row, Col, Fade } from "react-bootstrap";
import findrLogo from "../Images/findrLogo.svg";
import { Row, Col } from "react-bootstrap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap, TweenMax, TimelineLite, Power3 } from "gsap";

export const About = () => {
  gsap.registerPlugin(ScrollTrigger);
  let content = useRef(null);
  let tl = new TimelineLite({ delay: 0.8 });

  useEffect(() => {
    gsap.from(".about-title", {
      y: 44,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".about-title",
        start: "center 600px",
        toggleActions: "play none none none",
      },
      ease: Power3.easeOut,
      opacity: 0.2,
    });
    gsap.from(".about-desc", {
      y: 44,
      duration: 1.5,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".about-title",
        start: "bottom 600px",
        toggleActions: "play none none none",
      },
      ease: Power3.easeOut,
      opacity: 0.2,
    });
  }, [tl]);

  return (
    <header className="about">
      <div class="container">
        <Col md={3}></Col>
        <Col md={6}>
          <div class="container-inner">
            <div class="about-title">Who am I</div>
            <div class="about-desc">
              I'm an entrepreneur, a tech head and an aspiring Data Scientist
              <br />- <br />I love having control (I mean who doesn't). This
              website for example - I control the design and the architecture.
              For my projects, I try to streamline the process to make the
              different teams work in tandem.
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
