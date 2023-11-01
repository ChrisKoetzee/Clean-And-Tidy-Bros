import React, { useState } from "react";  // Add React here

import { Container, Modal, Button, Form, Row, Col } from "react-bootstrap";

const ModalTestimonial = () => {
    const [add, setAdd] = useState(false);

    const toggle = () => setAdd(!add);

    return (
        <Container>
            <Button onClick={toggle}>Add your testimonial</Button>
            <Modal show={add} onHide={toggle}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Please add your testimonial below</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='mb-4' style={{ width: "100%" }}>
                        <Row className='mb-4 d-flex justify-content-evenly align-items-center' >
                            <Col xs={12}>
                                <Form.Group style={{ width: "100%" }}>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="fullNames"
                                        placeholder="Enter full name"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className='d-flex justify-content-evenly align-items-center' >
                            <Col xs={12}>
                                <Form.Group style={{ width: "100%" }}>
                                    <Form.Label>Feedback</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={6}
                                        name="additionalInfo"
                                        placeholder="Enter testimonial here"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant='primary' onClick={toggle}>
                    Submit
                </Button>
                </Modal.Footer>
            </Modal>
        </Container>
        
    );
};

export default ModalTestimonial;
