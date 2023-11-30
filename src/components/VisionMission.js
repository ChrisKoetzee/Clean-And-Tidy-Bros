import React from 'react';
import { Container, Col, Row } from "react-bootstrap";
import '../App.css';

const VisionMission = () => {
    return (
        <Container fluid="md">
            <Row>
                <Col lg={6} md={6}>
                    <h2>Vision</h2>
                    <p className="text-left-align">Striving to be one of the best home-based cleaning companies with in SA. Bringing families together by keeping their homes eco-friendly.</p>
                </Col>
                <Col lg={6} md={6}>
                    <h2>Mission</h2>
                    <p className="text-left-align">Develope a client-base that can call us on a regular bases to make their homes clean, spotless and make a difference within homes in SA.</p>
                </Col>
            </Row>              
        </Container>
    )
};

export default VisionMission;