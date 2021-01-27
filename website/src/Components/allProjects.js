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
      className="about"
      // style={{ border: "purple 2px solid" }}
    >
      <div
        className="container"
        style={
          {
            // border: "white 2px solid",
          }
        }
      >
        <div
          className="all-proj-title"
          // style={{ border: "yellow 2px solid" }}
        >
          PROJECTS
        </div>
        <div
          className="projects-container"
          style={{
            border: "magenta 2px solid",
            display: "flex",
            flexWrap: "wrap",
            width: "1100px",
            alignSelf: "center",
          }}
        >
          <Codify />
          <Dathena />
          <Dathena />
          <Dathena />
          <Dathena />
          <Dathena />
        </div>
      </div>
    </header>
  );
};
