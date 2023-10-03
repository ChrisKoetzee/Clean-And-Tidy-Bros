import { Row, Col, Button, Card } from "react-bootstrap";

const Footer = () => {
    return (
        <div className="footer" 
            style={{
                width: "100%", 
                paddingTop: "3px", 
                marginTop: "3px"
                }}>
            <Card>
                <Card.Body>
                    <Row>
                        <Col>
                            <Card.Title>Contact Information</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>Contact Eathan on +27 74 963 4583</li>
                                    <li>Contact Karien on +27 74 217 0023</li>
                                    <li>Email address : brostidyandclean02@gmail.com</li>
                                </ul>
                            </Card.Text>
                        </Col>
                        <Col>
                        <Card.Title>Social Media</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>Facebook</li>
                                    <li>Instagram</li>
                                    <li>Twitter</li>
                                </ul>
                            </Card.Text>
                        </Col>
                    </Row> 
                    <Row>
                        <Col>
                            <Button variant="primary">Email us</Button>
                        </Col>
                        <Col>
                            <Button variant="success">Add any comments</Button>
                        </Col>
                    </Row> 
                    {/* <Row>
                        <Col>
                            <p>Terms and conditions</p>
                        </Col>
                        <Col>
                            <p>Created by TnT Development</p>
                        </Col>
                    </Row>                   */}
                </Card.Body>
            </Card>
        </div>
    )
};

export default Footer;