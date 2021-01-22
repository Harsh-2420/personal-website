import React, { useRef, useEffect, useState } from "react";
import uoftLogo from "../Images/uoft.png";
import paper from "../Images/res-paper-vid.mp4";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// intro = fixit & video = fixit-paper
export const Fixit = () => {
  const IntroVideoRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    videoRef.current.currentTime = 0;
    ScrollTrigger.create({
      trigger: IntroVideoRef.current,
      scrub: true,
      pin: IntroVideoRef.current,
      start: "center center",
      end: "+=2000",
      markers: true,
      onUpdate: function (self) {
        if (videoRef.current) {
          const scrollPos = self.progress;
          const videoDuration = videoRef.current.duration;
          const videoCurrentTime = videoDuration * scrollPos;

          if (videoCurrentTime) {
            videoRef.current.currentTime = videoCurrentTime;
          }

          // console.log(videoDuration, scrollPos, videoCurrentTime)
        }
      },
    });
  }, [IntroVideoRef, videoRef]);

  return (
    <header className="fixit">
      <div ref={IntroVideoRef} class="intro">
        <video ref={videoRef} src={paper} className="fixit-paper"></video>
      </div>
    </header>
  );
};
