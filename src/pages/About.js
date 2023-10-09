import { Container, Col, Row } from "react-bootstrap";
import Template from "../components/Template";
import '../App.css';

const About = () => {
    return (
        <div>
            <Template>
                <header className="App-header mt-5">
                    <Container fluid="md" className="mt-5">
                        <Row>
                            <Col>
                                <h1 >About Us</h1>
                                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <img src="https://digitalcollections.lib.uct.ac.za/islandora/object/islandora%3A18114/datastream/MEDIUM_SIZE/view" height="80%" width="100%" alt="flats in Elsies River"/>
                            </Col>
                            <Col>
                                <img src="https://digitalcollections.lib.uct.ac.za/islandora/object/islandora%3A18113/datastream/MEDIUM_SIZE/view" height="80%" width="100%" alt="Elsies Main road 1977"/>
                            </Col>
                        </Row>             
                    </Container>
                </header>
            </Template>
        </div>
    )
};

export default About;