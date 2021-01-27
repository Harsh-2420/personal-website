import React, { useEffect, useRef } from "react";
import "../App2.scss";
import JIcon from "../Images/J-icon.svg";
import Chart from "chart.js";
import { gsap, TweenMax, TimelineLite, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Jumbotron = () => {
  // const Jlogo = document.querySelectorAll(".JIcon path");
  // console.log(Jlogo.length);
  let content = useRef(null);
  let tl = new TimelineLite({ delay: 0.8 });

  useEffect(() => {
    tl.staggerFrom(
      [".name-1", ".name-2", ".name-3"],
      1,
      {
        y: 44,
        ease: Power3.easeOut,
        opacity: 0,
      },
      0.15,
      "Start"
    )
      .from(".title", 1, { y: -20, opacity: 0, ease: Power3.easeOut }, "Start")
      .from(
        ".JIcon",
        1,
        { y: 30, opacity: 0, ease: Power3.easeOut, delay: 0.5 },
        "Start"
      );
  }, [tl]);
  return (
    <div className="hero">
      <div className="container" ref={content}>
        {/* <img className="JIcon" src={JIcon} /> */}
        <svg
          className="JIcon"
          width="145"
          height="199"
          viewBox="0 0 145 199"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0)">
            <rect width="145" height="199" fill="white" />
            <path
              d="M60.369 117.86L60.2946 156.444C60.2116 157.093 60.2116 157.719 60.2116 158.265L60.2116 158.29L60.2116 158.298C60.2856 167.66 67.5565 174.676 71.6103 177.979L71.6706 178.028L71.7377 178.067C71.9587 178.196 72.2038 178.279 72.4578 178.309C72.7118 178.34 72.9695 178.318 73.2149 178.245L73.2429 178.237L73.2704 178.227C73.6193 178.101 73.9205 177.869 74.1327 177.565L74.1524 177.537L74.1702 177.507L74.2566 177.363C75.6805 175.488 78.3036 171.927 80.6038 168.143C81.7625 166.236 82.8504 164.255 83.6624 162.39C84.4656 160.547 85.0379 158.732 85.0873 157.182C85.0942 156.981 85.1388 155.448 85.1389 153.431C85.1421 151.505 85.1068 149.825 85.0707 148.584C85.0495 147.854 85.029 147.299 85.0153 146.928C85.0051 146.651 84.9987 146.478 84.9987 146.413V146.396L84.9981 146.379C84.8908 143.22 84.6878 104.291 84.3646 0.999957L143.717 0.993786C143.821 30.9603 143.894 60.9268 143.936 90.8932C143.96 124.11 143.895 138.612 143.865 145.505C143.838 151.415 143.837 151.733 143.938 153.459C144.008 154.74 143.999 156.024 143.913 157.305L143.913 157.31C143.295 167.194 138.152 175.263 132.907 181.013C127.668 186.758 122.403 190.103 121.715 190.525L121.713 190.526C118.355 192.6 106.89 199.425 91.3085 197.555C89.1403 197.288 70.887 194.75 59.3484 178.353C55.2194 172.444 52.5234 165.654 51.474 158.521L51.296 127.972L51.2902 126.985L50.3028 126.978L11.018 126.71L10.0017 126.703L10.0112 127.72L10.2785 156.259C10.2158 157.215 10.2167 158.174 10.2811 159.13L10.2813 159.133C10.7358 165.549 14.0404 171.317 18.2654 175.801C22.4882 180.283 27.7139 183.574 32.1802 185.007L32.1806 185.007C35.263 185.994 37.1063 186.556 38.1823 186.872C38.7204 187.031 39.0683 187.128 39.2846 187.186C39.3929 187.215 39.4688 187.235 39.5195 187.248C39.545 187.254 39.5643 187.259 39.5783 187.262L39.5956 187.266L39.6016 187.268L39.604 187.268L39.605 187.269L39.6055 187.269C39.6057 187.269 39.6059 187.269 39.8264 186.293L39.6059 187.269L39.6087 187.269C40.7023 187.513 41.6353 187.684 42.4343 187.826C42.5144 187.841 42.5929 187.855 42.6698 187.868C43.3698 187.993 43.9409 188.095 44.4436 188.212C45.5196 188.462 46.1538 188.754 46.7544 189.374L46.7574 189.378C47.3758 190.011 47.8161 190.797 48.0336 191.656C48.2486 192.505 48.2383 193.395 48.0041 194.239C47.616 195.317 46.7148 196.083 45.6015 196.643C44.4809 197.206 43.2781 197.493 42.4814 197.683C41.3427 197.952 36.0751 199.074 27.0016 194.104L27.0015 194.104C16.8636 188.553 11.5481 180.649 7.92901 175.256L7.9285 175.255C4.44595 170.076 2.85569 166.105 1.98123 162.314L1.98102 162.313C1.54837 160.445 1.27135 158.545 1.15282 156.631L1.00385 117.86H60.369ZM115.887 184.175L115.888 184.175C124.613 179.305 134.049 169.411 134.529 157.44C134.584 156.225 134.549 155.008 134.422 153.798V10.9653V9.9576L133.414 9.96528L94.0719 10.2651L93.0786 10.2727L93.0795 11.266L93.2134 154.687L93.2134 154.701L93.2138 154.716C93.2692 156.616 93.1555 158.518 92.8742 160.399C91.2051 171.318 84.2905 178.739 80.4462 182.23L80.3693 182.3L80.3084 182.384L79.6712 183.264L79.2351 183.866L79.6865 184.457L79.7693 184.566L79.8097 184.619L79.8568 184.666L79.9014 184.71L80.0208 184.83L80.173 184.904C80.7761 185.195 81.6699 185.594 82.7274 186.009C88.1947 188.254 94.098 189.233 99.9964 188.874L100.003 188.873C105.579 188.499 111.003 186.895 115.887 184.175Z"
              stroke="#303030"
              stroke-width="2"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="145" height="199" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <h1>
          <div className="name">
            <div className="name-1">HARSH</div>
            <div className="name-2">JHUNJHUNWALA</div>
            {/* <div className="name-3">WALA</div> */}
          </div>
        </h1>
        <div className="title"> Data Scientist</div>
        {/* <div className="bb"></div> */}
      </div>
    </div>
  );
};
