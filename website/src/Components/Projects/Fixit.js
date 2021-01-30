import React, { useRef, useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { gsap, TweenMax, TimelineLite } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import $ from "jquery";

export const FixitProj = () => {
  return (
    <div className="project-container">
      <div className="project-header">Fixit</div>
      <div className="project-desc">
        Published a research paper and developed an ML model on a software that
        recommends personalized review questions to students based on their past
        answers. Implemented Collaborative Filtering and A/B Hypothesis testing
        on CS1 students.
      </div>
    </div>
  );
};
