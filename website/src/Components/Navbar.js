import React, { useEffect, useRef } from "react";
import "../App.css";
import { TimelineLite, TweenMax, Power3 } from "gsap";
import { BrowserRouter, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <BrowserRouter>
      <div>
        <NavLink activeClassName="active">Home</NavLink>

        <NavLink activeClassName="active">About</NavLink>

        <NavLink activeClassName="active">Findr</NavLink>
      </div>
    </BrowserRouter>
  );
};
