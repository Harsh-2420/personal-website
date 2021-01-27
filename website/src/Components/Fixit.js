// import React, { useRef, useEffect, useState } from "react";
// import uoftLogo from "../Images/uoft.png";
// import paper from "../Images/res-paper-vid.mp4";
// import { gsap, TimelineLite, TweenMax, Power3 } from "gsap";

// export const Fixit = () => {
//   const videoRef = useRef(null);
//   const tl1 = gsap.timeline({ delay: 0.8 });
//   const tl2 = gsap.timeline({ paused: true });
//   // let tl = new TimelineLite({ delay: 0.8 });

//   useEffect(() => {
//     tl2.to(".fixit-paper", {
//       duration: 0.8,
//       scale: 0.7,
//       x: 400,
//       ease: "expo.inOut",
//       scrollTrigger: {
//         trigger: ".fixit-paper",
//         markers: true,
//         loop: true,
//         start: "top 800px",
//         end: "bottom 150px",
//         scrub: true,
//       },
//     });
//   }, []);

//   return (
//     <header className="fixit" style={{ border: "2px solid white" }}>
//       <div class="intro" style={{ border: "2px solid green" }}>
//         <video
//           ref={videoRef}
//           src={paper}
//           className="fixit-paper"
//           autostart
//           autoplay="autoplay"
//           muted="muted"
//           loop="loop"
//           playsInline
//           disablePictureInPicture
//           type="video/mp4"
//           style={{ border: "2px solid teal" }}
//         />
//       </div>
//       <div className="fixit-content-inner" style={{ border: "2px solid red" }}>
//         <div className="fixit-content-line">
//           <ul>
//             <li>
//               developed a mobile application that helps students find study
//               partners for courses,
//               <br></br>hackathons and competitions.
//             </li>
//             <li>
//               developed a mobile application that helps students find study
//               partners for courses,
//               <br></br>hackathons and competitions.
//             </li>
//             <li>
//               developed a mobile application that helps students find study
//               partners for courses,
//               <br></br>hackathons and competitions.
//             </li>
//           </ul>
//         </div>
//       </div>
//     </header>
//   );
// };

import React, { useRef, useEffect, useState } from "react";
// import fixitVideo from "../Images/findrLogo.svg";
import fixitVideo from "../Images/res-paper-vid.mp4";
import { Row, Col } from "react-bootstrap";
import { gsap, TweenMax, TimelineLite } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import $ from "jquery";

export const Fixit = () => {
  gsap.registerPlugin(ScrollTrigger);
  const videoItem = useRef(null);
  let content = useRef(null);
  let tl = new TimelineLite({ delay: 0.8 });

  useEffect(() => {
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
        markers: true,
        start: "top 600px",
        end: "bottom 150px",
        scrub: true,
      },
    });

    gsap.to(".fixit-content-inner", {
      x: 200,
      duration: 1,
      // autoAlpha: 1,
      scrollTrigger: {
        trigger: ".fixitVideo",
        markers: true,
        // start: "top 600px",
        // end: "bottom 150px",
        scrub: true,
      },
    });
  }, []);

  return (
    <header className="fixit">
      <div className="container-fixit">
        <div className="fixit-content-inner" ref={(el) => (content = el)}>
          <div className="fixit-content-line">
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
          // style={{ border: "2px solid teal" }}
        />
      </div>
    </header>
  );
};
