import React from 'react';
import { Col, Row, Container, Form, Button } from "react-bootstrap";
import Template from "../components/Template";
import '../App.css';

const GetAQuote = () => {
    return (
        <Template>
            <header className="App-header mt-5">
                <Container fluid="md" className="mt-5 centered-container">
                    <Form>
                        <h1>Get a Quote</h1>
                        <Row className="justify-content-center">
                            <Col xs={12} sm={6}>
                                <Form.Group className="mb-3" controlId="fullNames">
                                    <Form.Label>Full first name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="fullNames"
                                        placeholder="Enter full first name"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>   
                        <Row className="justify-content-center">
                            <Col xs={12} sm={6}>
                                <Form.Group className="mb-3" controlId="surname">
                                    <Form.Label>Surname</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="surname"
                                        placeholder="Enter surname"
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
                                        name="email"
                                        placeholder="Enter email address"
                                    />
                                </Form.Group>
                            </Col>
                        </Row> 
                        <Row className="justify-content-center">
                            <Col xs={12} sm={6}>
                                <Form.Group className="mb-3" controlId="service">
                                    <Form.Label>Select a service</Form.Label>
                                    <Form.Select name="service" defaultValue="">
                                        <option value="" disabled>Select a service</option>
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
                                        name="additionalInfo"
                                        placeholder="Enter additional information"
                                    />
                                </Form.Group>
                            </Col>
                        </Row> 
                        <Row className="justify-content-center">
                            <Col xs={12} sm={6}>
                                <Button className="w-100">Submit</Button>
                            </Col>
                        </Row>
                    </Form>       
                </Container>
            </header>
        </Template>
    )
};

export default GetAQuote;