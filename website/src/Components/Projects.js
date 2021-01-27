import React, { useRef, useEffect, useState } from "react";
import uoftLogo from "../Images/uoft.png";
import paper from "../Images/res-paper-vid.mp4";
import { gsap, TweenMax, TimelineLite } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Row, Col } from "react-bootstrap";

export const Projects = () => {
  return (
    <header className="about">
      <div class="container">
        {/* <Row> */}
        <Col md={3}></Col>
        <Col md={6}>
          <div class="container-inner">
            <div class="proj-title">PROJECTS</div>
            <div class="about-desc"></div>
          </div>
        </Col>
        {/* </Row> */}
        <Row>
          <Col md={1}>OTHER</Col>
          <Col md={5} className="project-1">
            CODIFY
          </Col>
          <Col md={5} className="project-2">
            DATHENA
          </Col>
          <Col md={1}>OTHER</Col>
        </Row>
      </div>
    </header>
  );
};
