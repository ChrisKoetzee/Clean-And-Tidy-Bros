import { Modal, Button, Form, Row, Col } from "react-bootstrap";
// import { useState } from "react";

const TestimonialModal = (props) => {
    // const [add, setAdd] = useState("");
    return(
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            data-bs-toggle="modal" 
            data-bs-target="#myModal"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Please add your testimonial below</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row className="justify-content-center">
                        <Col xs={12} sm={6}>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control 
                                     type="text"
                                     name="fullNames"
                                     placeholder="Enter full name"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col xs={12} sm={6}>
                            <Form.Group>
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
                    <Row className="justify-content-center">
                        <Col xs={12} sm={6}>
                            <Form.Group>
                                <Form.Label>Upload Images</Form.Label>
                                <Form.File 
                                     id="custom-file"
                                     label="Choose file"
                                     custom
                                     accept="image/*"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default TestimonialModal;