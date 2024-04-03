import React, { useState, useRef } from "react";
import { Col, Row, Container, Form, Button } from "react-bootstrap";
import Template from "../components/Template";
import "../App.css";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GetAQuote = () => {
  const [ form, setForm] = useState(false);
  const [ formData, setFormData ] = useState({
    userName: "",
    userEmail: "",
    userService: "",
    userDescription: ""
  });

  const Form = useRef();

  const toggle = () => setForm(!form);

  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
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
      return;
    };
    console.log("Sending email");
    const sendingToastId = toast.info("Sending Email", {autoClose: 2000});

    emailjs 
      .sendForm( serviceId, templateId, Form.current, {
        publicKey: userId,
      })
      .then(
        () => {
          console.log("Success");
          toast.success("Request sent successfully", {autoClose: 2000});
          toast.dismiss(sendingToastId);
          setFormData ({
            userName: "",
            userEmail: "",
            userService: "",
            userDescription: "",
          });
          toggle();
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
          <Form ref={Form} onSubmit={submitForm}>
            <h1>Get a Quote</h1>
            <Row className="justify-content-center">
              <Col xs={12} sm={6}>
                <Form.Group className="mb-3" controlId="fullNames">
                  <Form.Label>Name and Surname</Form.Label>
                  <Form.Control
                    type="text"
                    name="userName"
                    placeholder="Enter name and surname"
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
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xs={12} sm={6}>
                <Form.Group className="mb-3" controlId="service">
                  <Form.Label>Select a service</Form.Label>
                  <Form.Select name="userService" defaultValue="" onChange={handleChange}>
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
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xs={12} sm={6}>
                <Button className="w-100" onClick={toggle}>Submit</Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </header>
    </Template>
  );
};

export default GetAQuote;
