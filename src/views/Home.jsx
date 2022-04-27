import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import OnePiece from "../pictures/OnePiece.jpg";
import castle from "../pictures/castle.jpg";
import Totoro_pic from "../pictures/Totoro_pic.jpg";
import bleach from "../pictures/bleach.jpg";
import Footer from "../components/Footer";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Welcome to JAPANIME</Modal.Title>
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
      <br />
      <HomeHello />
      <br />
      <Footer />
    </div> //ending line
  );

  function HomeHello() {
    return (
      <Carousel>
        <Carousel.Item>
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

        <Carousel.Item>
          <img
            id="homeImgSize"
            className="d-block w-100 "
            src={Totoro_pic}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            id="homeImgSize"
            className="d-block w-100"
            src={OnePiece}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            id="homeImgSize"
            className="d-block w-100"
            src={bleach}
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
  } // Helloworld ending line
}; // Home end line
export default Home;
