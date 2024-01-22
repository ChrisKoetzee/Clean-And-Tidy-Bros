import React from "react";
import { Container, Carousel } from "react-bootstrap";
import Template from "../components/Template";
import "../App.css";

const Gallery = () => {
  return (
    <Template>
      <header className="App-header mt-5">
        <Container
          fluid="md"
          className="display-flex justify-content-center mt-5"
        >
          <h1>Gallery</h1>
          <Carousel xs={12} sm={6}>
            <Carousel.Item>
              <img
                className="d-block mx-auto img-responsive"
                src="https://images.unsplash.com/photo-1627905646269-7f034dcc5738?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xlYW5pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt="First slide"
                style={{
                  height: "80vh",
                }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block mx-auto img-responsive"
                src="https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xlYW5pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt="Second slide"
                style={{
                  height: "80vh",
                }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block mx-auto img-responsive"
                src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xlYW5pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt="Third slide"
                style={{
                  height: "80vh",
                }}
              />
            </Carousel.Item>
          </Carousel>
        </Container>
      </header>
    </Template>
  );
};

export default Gallery;
