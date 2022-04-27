import React from "react";
import { Carousel } from "react-bootstrap";
import squirtle from "../pictures/squirtle.png";
import castle from "../pictures/castle.jpg";
import "./HomeHello.css";

const HomeHello = () => {
  return (
    <Carousel>
      <Carousel.Item style={{ width: "50%" }}>
        <img
          id="homeImgSize"
          className="d-block w-100"
          src={castle}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ width: "50%" }}>
        <img
          id="homeImgSize"
          className="d-block w-100"
          src="https://cphoto.asiae.co.kr/listimglink/1/2020102810420269308_1603849322.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ width: "50%" }}>
        <img
          id="homeImgSize"
          className="d-block w-100"
          src={squirtle}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default HomeHello;
