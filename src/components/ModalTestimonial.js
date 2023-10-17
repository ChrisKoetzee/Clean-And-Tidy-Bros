import React, { useState } from "react";  // Add React here

import { Modal, Button, Form, Row, Col } from "react-bootstrap";

const ModalTestimonial = () => {
    const [add, setAdd] = useState(false);
    // const [additionalInfo, setAdditionalInfo] = useState("");

    const toggle = () => setAdd(!add);

    // Function to handle the 'Add your testimonial' button click
    // const handleAddTestimonial = () => {
        // You can use fullNames and additionalInfo state variables here
        // to handle the data you want to add to your testimonial.

        // For example, you can log the values to the console for now:
        // console.log("Full Name:", fullNames);
        // console.log("Testimonial:", additionalInfo);
    // };

    return (
        <Modal>
            <Button onClick={toggle}>Add your testimonial</Button>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Please add your testimonial below</Modal.Title>
            </Modal.Header>
            <Modal.Body tabIndex='-1' show={add} setShow={setAdd}>
                <Form>
                    <Row className="justify-content-center">
                        <Col xs={12} sm={6}>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="fullNames"
                                    placeholder="Enter full name"
                                    // value={fullNames}
                                    // onChange={(e) => setFullNames(e.target.value)
                                    // }
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
                                    // value={additionalInfo}
                                    // onChange={(e) => setAdditionalInfo(e.target.value)
                                    // }
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button color='primary' onClick={toggle}>
                Submit
              </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalTestimonial;
