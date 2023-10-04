import React from 'react';
import { Container, Carousel } from 'react-bootstrap'; 
import Template from "../components/Template";
import '../App.css';

const Gallery = () => {
  return (
    <Container fluid="md" className="mt-5">
        <Template>
            <h1>Gallery</h1>
            <Carousel>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1627905646269-7f034dcc5738?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xlYW5pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                    alt="First slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xlYW5pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Second slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xlYW5pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Third slide"
                />
                </Carousel.Item>
            </Carousel>
        </Template>
    </Container>
  );
};

export default Gallery;
