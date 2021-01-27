import React, { useRef, useEffect, useState } from "react";
import uoftLogo from "../Images/uoft.png";
import paper from "../Images/res-paper-vid.mp4";
import { gsap, TimelineLite, TweenMax, Power3 } from "gsap";

export const Fixit = () => {
  const videoRef = useRef(null);
  const tl1 = gsap.timeline({ delay: 0.8 });
  const tl2 = gsap.timeline({ paused: true });
  // let tl = new TimelineLite({ delay: 0.8 });

  useEffect(() => {
    tl2.to(".fixit-paper", {
      duration: 1,
      scale: 0.7,
      x: -400,
      ease: "expo.inOut",
      scrollTrigger: {
        trigger: ".fixit-paper",
        markers: true,
        loop: true,
        start: "top 800px",
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
          loop="loop"
          playsInline
          disablePictureInPicture
          type="video/mp4"
        />
      </div>
    </header>
  );
};
