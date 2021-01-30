import React, { useRef, useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { gsap, TweenMax, TimelineLite } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import $ from "jquery";

export const Facial = () => {
  return (
    <div className="project-container">
      <div className="project-header">Facial</div>
      <div className="project-desc">
        Analyzed facial images to predict key points that represent elements of
        the face. Using the results to build facial trackers. Developed the
        model using Convolutional Neural Net with Tensorflow, NumPy and Pandas
        to analyze facial expressions.
      </div>
    </div>
  );
};
