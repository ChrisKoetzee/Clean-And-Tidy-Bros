import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Template from "../components/Template";
import "../App.css";
import school from "../images/school.jpg";

const About = () => {
  return (
    <div>
      <Template>
        <header className="App-header mt-5 mb-10" >
          <Container fluid="md" className="mt-5" >
            <Row className="display-flex justify-content-center">
              <Col xs={12} sm={12}>
                <h1>About Us</h1>
                <p>
                  Two high school friends got together on one rainy day grabbed a note book some coffee and sat in their car parked in the garage and decided. HOW CAN WE MAKE A DIFFERENCE WITHIN OUR COMMUNITY!!. With mothers and fathers both working in the household and young children left to clean instead of focusing on their schooling as the 2 friends themselves had to do. They decided to help.
                </p>
              </Col>
            </Row>
            <Row className="aboutImage mt-0" >
              <Col xs={12} sm={12} className="mt-0">
                <img
                  src={school}
                  className="img-fluid"
                  // height="50%"
                  // width="70%"
                  alt="Goodwood college"
                />
              </Col>
            </Row>
          </Container>
        </header>
      </Template>
    </div>
  );
};

export default About;
