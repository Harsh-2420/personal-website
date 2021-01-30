import React, { useRef, useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { gsap, TweenMax, TimelineLite } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import $ from "jquery";

export const Charlottesville = () => {
  return (
    <div className="project-container">
      <div className="project-header">Charlottesville</div>
      <div className="project-desc">
        Analyzed data from all tweets over 4 days to perform Natural Language
        Processing with sentiment analysis. Utilized NLTK and tokenizing to
        break down the tweets and perform data visualization.
      </div>
    </div>
  );
};
