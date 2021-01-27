import React, { useRef, useEffect, useState } from "react";
// import { Container, Row, Col, Fade } from "react-bootstrap";
import findrLogo from "../Images/findrLogo.svg";
import { Row, Col } from "react-bootstrap";
import { gsap, TweenMax, TimelineLite } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import $ from "jquery";

export const Findr = () => {
  gsap.registerPlugin(ScrollTrigger);
  const logoItem = useRef(null);
  let content = useRef(null);
  let tl = new TimelineLite({ delay: 0.8 });

  useEffect(() => {
    $(window).on("load", function () {
      $(window)
        .scroll(function () {
          var windowBottom = $(this).scrollTop() + $(this).innerHeight();
          $(".findr-content-line").each(function () {
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

    gsap.to(".findrLogo", {
      x: -400,
      scale: 0.6,
      duration: 3,
      scrollTrigger: {
        trigger: ".findrLogo",
        markers: true,
        start: "top 600px",
        end: "bottom 150px",
        scrub: true,
      },
    });

    gsap.to(".findr-content-inner", {
      x: -300,
      duration: 1,
      // autoAlpha: 1,
      scrollTrigger: {
        trigger: ".findrLogo",
        markers: true,
        // start: "top 600px",
        // end: "bottom 150px",
        scrub: true,
      },
    });
  }, []);

  return (
    <header className="findr">
      <div className="container-findr">
        <img ref={logoItem} src={findrLogo} className="findrLogo" />
        <div className="findr-content-inner" ref={(el) => (content = el)}>
          <div className="findr-content-line">
            <ul>
              <li>
                developed a mobile application that helps students find study
                partners for courses,
                <br></br>hackathons and competitions.
              </li>
              <li>
                developed a mobile application that helps students find study
                partners for courses,
                <br></br>hackathons and competitions.
              </li>
              <li>
                developed a mobile application that helps students find study
                partners for courses,
                <br></br>hackathons and competitions.
              </li>
            </ul>
          </div>
        </div>
        <div class="side-head">EXPERIENCE</div>
        <div class="side-head-2">EXPERIENCE</div>
      </div>
    </header>
  );
};
