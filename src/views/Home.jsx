import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import OnePiece from "../pictures/OnePiece.jpg";
import castle from "../pictures/castle.jpg";
import Totoro_pic from "../pictures/Totoro_pic.jpg";
import bleach from "../pictures/bleach.jpg";
import Footer from "../views/Footer";
import "./Home.css";

const Home = () => {
  let [homeCard, setHomeCard] = useState(true);

  return (
    <div>
      {homeCard === true ? (
        <div>
          <Modal.Dialog>
            <Modal.Header
              closeButton
              onHide={() => {
                setHomeCard(false);
              }}
            >
              <Modal.Title>Welcome to JAPANIME</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>
                Sometimes you can find more lessons and touching from Animes
                than movies. I don't force you to be a Otaku, but these are
                'Must-Watch' Animes in your life. Don't miss out these deeply
                touching Animes.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() =>
                  window.open("https://mattseoblog.herokuapp.com/")
                }
              >
                -From Matt Seo-
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      ) : null}
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
            <h3>Howl's Moving Castle</h3>
            <p>
              "There You Are Sweetheart, Sorry I'm Late, I Was Looking
              Everywhere For You."
            </p>
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
            <h3>My Neighbor Totoro</h3>
            <p>"Try Laughing. Then Whatever Scares You Will Go Away."</p>
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
            <h3 style={{ color: "#404040" }}>One Piece</h3>
            <p style={{ color: "#404040" }}>
              “Stop Counting Only Those Things You Have Lost! What Is Gone, Is
              Gone! So Ask Yourself This. What Is There... That Still Remains To
              You?!”
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
            <h3>Bleach</h3>
            <p>
              "I don't remember saying that I would kill you because I'm a Soul
              Reaper. The reason I am killing you is simple. It's because you
              aimed your blade at my only pride."
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  } // Helloworld ending line
}; // Home end line
export default Home;
