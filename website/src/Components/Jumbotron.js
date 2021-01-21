import React, { useState } from "react";
import { Container, Row, Col, Fade } from "react-bootstrap";
import findrLogo from "../Images/Findr_logo.svg";
import phone from "../Images/iphone.png";

export const Jumbotron = () => {
  return (
    <header className="home">
      <div class="container">
        <div class="container__image">
          <div class="container__info container__author">
            Photo by
            <a
              class="link"
              href="https://instagram.com/silvia.diaconescu"
              target="_blank"
            >
              Silvia Diaconescu
            </a>
          </div>
          <div class="container__info container__location">
            Geneva Lake Switzerland
          </div>
        </div>
      </div>
    </header>
  );
};
