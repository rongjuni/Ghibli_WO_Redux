import { Modal, Button } from "react-bootstrap";
import HomeHello from "./HomeHello";
import React from "react";
import { Carousel } from "react-bootstrap";
import squirtle from "../pictures/squirtle.png";
import castle from "../pictures/castle.jpg";
import "./HomeHello.css";

const Home = () => {
  return (
    <div>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Welcome to JAPANI</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            Sometimes you find more lessons from Animes than movies. I don't
            force you to be a Otaku.
          </p>
          <p>But these are 'Must-Watch-in-your-life' Animes. </p>
          <p>Don't miss out these deeply touching Animes. </p>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              console.log("resume appears");
            }}
          >
            -From Matt Seo-
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
      <HomeHello />
    </div> //ending line
  );

  function HomeHello() {
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
  }
};
export default Home;
