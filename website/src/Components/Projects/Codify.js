import React, { useRef, useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { gsap, TweenMax, TimelineLite } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import $ from "jquery";

export const Codify = () => {
  return (
    <div className="project-container">
      <div className="project-header">CODIFY</div>
      <div className="project-desc">
        An algorithm that can read and grade papers for CS1 courses using CNN
        and RNN The image recognition model uses CNN to read the handwritten
        code The RNN integrated with IntelliSense rectifies mistakes made by
        then CNN
      </div>
    </div>
  );
};
