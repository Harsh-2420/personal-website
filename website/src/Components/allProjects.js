import React, { useRef, useEffect, useState } from "react";
import uoftLogo from "../Images/uoft.png";
import paper from "../Images/res-paper-vid.mp4";
import { gsap, TweenMax, TimelineLite } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Row, Col } from "react-bootstrap";
import { Codify } from "./Projects/Codify";
import { Dathena } from "./Projects/Dathena";

export const Projects = () => {
  return (
    <header
      className="project-page"
      // style={{ border: "purple 2px solid" }}
    >
      <div className="side-head"> PROJECTS</div>
      <div className="side-head-2">PROJECTS</div>
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
          <Row>
            <Col>
              <Codify />
            </Col>
            {/* <div className="vertical-line"></div> */}
            <Col>
              <Dathena />
            </Col>
          </Row>
          <Row>
            <Col>
              <Dathena />
            </Col>
            <Col>
              <Dathena />
            </Col>
          </Row>
        </div>
      </div>
    </header>
  );
};
