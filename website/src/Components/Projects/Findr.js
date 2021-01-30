import React, { useRef, useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { gsap, TweenMax, TimelineLite } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import $ from "jquery";

export const FindrProj = () => {
  return (
    <div className="project-container">
      <div className="project-header">Findr</div>
      <div className="project-desc">
        Developed a web-app and mobile application to help students find
        partners for courses and competitions using ReactJS, NodeJS, HTML and
        CSS. Managed a team of 20 to develop and market the application that is
        launching in five universities across North America. Boosted efficiency
        to lead to a fluid launch with an expected user base of 50,000 students.
      </div>
    </div>
  );
};
