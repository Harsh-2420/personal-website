import React, { useRef, useEffect, useState } from "react";
import fixitVideo from "../Images/res-paper-vid.mp4";
import { Row, Col } from "react-bootstrap";
import { gsap, TweenMax, TimelineLite, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FixitProj } from "./Projects/Fixit";
import $ from "jquery";

export const Fixit = () => {
  gsap.registerPlugin(ScrollTrigger);
  const videoItem = useRef(null);
  let content = useRef(null);
  let tl = new TimelineLite({ delay: 0.8 });

  useEffect(() => {
    $(".fixitVideo").click(function () {
      window.location =
        "https://cssplice.github.io/LAS20/proc/SPLICE_2020_LS_paper_2.pdf";
    });
    $(window).on("load", function () {
      $(window)
        .scroll(function () {
          var windowBottom = $(this).scrollTop() + $(this).innerHeight();
          $(".fixit-content-line").each(function () {
            /* Check the location of each desired element */
            var objectBottom = $(this).offset().top + $(this).outerHeight();

            /* If the element is completely within bounds of the window, fade it in */
            if (objectBottom < windowBottom) {
              //object comes into view (scrolling down)
              if ($(this).css("opacity") == 0) {
                $(this).fadeTo(500, 1);
              }
            } else {
              //object goes out of view (scrolling up)
              if ($(this).css("opacity") == 1) {
                $(this).fadeTo(500, 0);
              }
            }
          });
        })
        .scroll(); //invoke scroll-handler on page-load
    });

    gsap.to(".fixitVideo", {
      x: 400,
      scale: 0.6,
      duration: 3,
      scrollTrigger: {
        trigger: ".fixitVideo",
        // markers: true,
        start: "top 600px",
        end: "bottom 150px",
        scrub: true,
      },
      ease: Power3.easeOut,
    });

    gsap.to(".fixit-content-inner", {
      x: 200,
      duration: 1,
      scrollTrigger: {
        trigger: ".fixitVideo",
        start: "top 600px",
        scrub: true,
      },
      ease: Power3.easeOut,
    });
  }, []);

  return (
    <header className="fixit">
      <div className="container-fixit">
        <div className="fixit-content-inner" ref={(el) => (content = el)}>
          <div className="fixit-content-line">
            <FixitProj />
          </div>
        </div>
        {/* <a href="https://cssplice.github.io/LAS20/proc/SPLICE_2020_LS_paper_2.pdf"> */}
        <video
          ref={videoItem}
          src={fixitVideo}
          className="fixitVideo"
          autostart
          autoplay="autoplay"
          muted="muted"
          loop="loop"
          playsInline
          disablePictureInPicture
          type="video/mp4"
          style={{ border: "2px solid teal", cursor: "pointer" }}
        />
        {/* </a> */}
      </div>
    </header>
  );
};
