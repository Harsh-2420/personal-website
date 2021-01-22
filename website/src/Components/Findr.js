import React, { useState } from "react";
// import { Container, Row, Col, Fade } from "react-bootstrap";
import findrLogo from "../Images/findrLogo.svg";
// import phone from "../Images/iphone.png";

export const Findr = () => {
  return (
    <header className="findr">
      <div class="container">
        <img src={findrLogo} className="findrLogo" />
      </div>
    </header>
  );
};
