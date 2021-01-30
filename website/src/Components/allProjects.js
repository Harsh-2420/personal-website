import React, { useRef, useEffect, useState } from "react";
import uoftLogo from "../Images/uoft.png";
import paper from "../Images/res-paper-vid.mp4";
import { gsap, TweenMax, TimelineLite, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Row, Col } from "react-bootstrap";
import { Codify } from "./Projects/Codify";
import { Dathena } from "./Projects/Dathena";
import { Facial } from "./Projects/Facial";
import { Charlottesville } from "./Projects/Charlottesville";

export const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);
  let content = useRef(null);
  let tl = new TimelineLite({ delay: 0.8 });

  useEffect(() => {
    gsap.from(".project-row-1", {
      y: 24,
      duration: 1.7,
      scrollTrigger: {
        trigger: ".all-proj-title",
        start: "bottom 600px",
        toggleActions: "play none none none",
      },
      ease: Power3.easeOut,
      opacity: 0.1,
    });
    gsap.from(".project-row-2", {
      y: 24,
      duration: 1.7,
      scrollTrigger: {
        trigger: ".project-row-1",
        start: "bottom 600px",
        toggleActions: "play none none none",
      },
      ease: Power3.easeOut,
      opacity: 0.1,
    });
    gsap.from(".side-head-proj", {
      x: 54,
      duration: 1.7,
      scrollTrigger: {
        trigger: ".project-row-1",
        start: "bottom 600px",
        toggleActions: "play none none none",
      },
      ease: Power3.easeOut,
      opacity: 0.1,
    });
    gsap.from(".side-head-proj-2", {
      x: -54,
      duration: 1.7,
      scrollTrigger: {
        trigger: ".project-row-1",
        start: "bottom 600px",
        toggleActions: "play none none none",
      },
      ease: Power3.easeOut,
      opacity: 0.1,
    });
  }, [tl]);
  return (
    <header
      className="project-page"
      // style={{ border: "purple 2px solid" }}
    >
      <div className="side-head-proj"> PROJECTS</div>
      <div className="side-head-proj-2">PROJECTS</div>
      <div
        className="container"
        style={{
          // border: "white 2px solid",
          top: "30vh",
        }}
      >
        <div
          className="all-proj-title"
          // style={{ border: "yellow 2px solid" }}
        >
          PROJECTS
        </div>
        <div
          className="projects-container"
          // style={{ border: "magenta 2px solid" }}
        >
          <Row className="project-row-1">
            <Col>
              <Codify />
            </Col>
            <Col>
              <Dathena />
            </Col>
          </Row>
          <Row className="project-row-2">
            <Col>
              <Facial />
            </Col>
            <Col>
              <Charlottesville />
            </Col>
          </Row>
        </div>
      </div>
    </header>
  );
};
