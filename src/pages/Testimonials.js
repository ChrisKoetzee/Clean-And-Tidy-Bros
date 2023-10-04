import { Col, Row, Container } from "react-bootstrap";
import Template from "../components/Template";
import '../App.css';

const Testimonials = () => {
    return (
        <Template>
            <Container fluid="md" className="mt-5">
                <Row>
                    <h1>Testimonials</h1>
                    <Col><p>This page is still under construction</p></Col>
                </Row>            
            </Container>
        </Template>
    )   
};

export default Testimonials;