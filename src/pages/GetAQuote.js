import React, { useState, useRef } from "react";
import { Col, Row, Container, Form, Button } from "react-bootstrap";
import Template from "../components/Template";
import "../App.css";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GetAQuote = () => {
  const [ formData, setFormData ] = useState({
    userName: "",
    userEmail: "",
    userService: "",
    userDescription: ""
  });

  const quote = useRef();

  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_QUOTE_ID;
  const quoteId = process.env.REACT_APP_EMAILJS_TEMPLATE_QUOTE_ID;
  const userId = process.env.REACT_APP_EMAILJS_USER_ID;

  const handleChange = (e) =>{
    const { name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.userName || !formData.userEmail || !formData.userService || !formData.userDescription){
      console.log("Please complete all fields");
      toast.info("Please complete all fields");
      return;
    };
    console.log("Sending request");

    emailjs 
      .sendForm( serviceId, quoteId, quote.current, {
        publicKey: userId,
      })
      .then(
        () => {
          console.log("Success");
          toast.success("Request sent successfully", {autoClose: 2000});
          setFormData ({
            userName: "",
            userEmail: "",
            userService: "",
            userDescription: "",
          });
        },
        (error) => {
          console.log('Failed to send request');
          toast.error("Failed to send request");
        },
      );
  };

  const submitForm = (e) => {
    e.preventDefault();
    sendEmail(e)
  }

  return (
    <Template>
      <header className="App-header mt-5">
        <Container fluid="md" className="mt-5 centered-container">
          <Form ref={quote} onSubmit={submitForm}>
            <h1>Get a Quote</h1>
            <Row className="justify-content-center">
              <Col xs={12} sm={6}>
                <Form.Group className="mb-3" controlId="fullNames">
                  <Form.Label>Name and Surname</Form.Label>
                  <Form.Control
                    type="text"
                    name="userName"
                    placeholder="Enter name and surname"
                    value={formData.userName}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xs={12} sm={6}>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="userEmail"
                    placeholder="Enter email address"
                    value={formData.userEmail}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xs={12} sm={6}>
                <Form.Group className="mb-3" controlId="service">
                  <Form.Label>Select a service</Form.Label>
                  <Form.Select name="userService" value={formData.userService} onChange={handleChange}>
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>Microwave steam cleaning</option>
                    <option>Shower steam cleaning</option>
                    <option>Upholstery steam cleaning</option>
                    <option>Vehicle upholstery steam cleaning</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xs={12} sm={6}>
                <Form.Group className="mb-3" controlId="additionalInfo">
                  <Form.Label>Please enter a brief description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="userDescription"
                    placeholder="Please enter a brief descrioption"
                    value={formData.userDescription}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xs={12} sm={6}>
                <Button className="w-100" type="submit" >Submit</Button>
                
              </Col>
            </Row>
          </Form>
        </Container>
      </header>
    </Template>
  );
};

export default GetAQuote;
