import React, { useRef, useEffect, useState } from "react";
import uoftLogo from "../Images/uoft.png";
import paper from "../Images/res-paper-vid.mp4";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// intro = fixit & video = fixit-paper
export const Fixit = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    gsap.to(".fixit-paper", {
      scale: 1.4,
      duration: 1,
      scrollTrigger: {
        trigger: ".fixit-paper",
        markers: true,
        start: "top 600px",
        end: "bottom 150px",
        scrub: true,
      },
    });
  }, []);

  return (
    <header className="fixit">
      <div class="intro">
        <video
          ref={videoRef}
          src={paper}
          className="fixit-paper"
          autostart
          autoplay="autoplay"
          muted="muted"
          playsInline
          disablePictureInPicture
          type="video/mp4"
        />
      </div>
    </header>
  );
};
