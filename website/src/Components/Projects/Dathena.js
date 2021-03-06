import React, { useRef, useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { gsap, TweenMax, TimelineLite } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import $ from "jquery";

export const Dathena = () => {
  return (
    <div className="project-container">
      <div className="project-header">DATHENA</div>
      <div className="project-desc">
        Partnered with Scotiabank and U of T to use financial big data for
        feature selection and predicting ratings. Implemented Principal
        Component Analysis for dimensionality reduction along with random forest
        and GAM
      </div>
    </div>
  );
};
