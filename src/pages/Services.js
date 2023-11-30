import React from 'react';
import { Col, Row, Container, Table } from "react-bootstrap";
import Template from "../components/Template";
import '../App.css';

const Services = () => {
    return (
        <Template>
            <header className="App-header mt-5">
                <Container fluid="md" className="mt-5">
                    <h1>Services</h1>
                    <Row >
                        <Col>
                            <Table striped bordered hover variant="primary">
                                <thead>
                                    <tr className="hover-card">
                                        <th>No</th>
                                        <th>Type of service</th>
                                        <th>Price range</th>
                                        <th>Description</th>
                                    </tr> 
                                </thead>
                                <tbody>
                                    <tr className="hover-card">
                                        <td>1</td>
                                        <td>Microwave steam cleaning</td>
                                        <td>R150.00 to R500</td>
                                        <td>Deep cleaning of the inside using thee steam cleaning machine as well as the cleaning of dust from the electrical compartment using air compression and the removal of all unwanted borders/insects</td>
                                    </tr>
                                    <tr className="hover-card">
                                        <td>2</td>
                                        <td>Bathroom steam cleaning</td>
                                        <td>R1500.00 to R3500.00</td>
                                        <td>Deep cleaning of the bathroom area using a steam cleaning machine as well as selected detergents which embodies a wonderful aroma. This includes the tiles, bath area, Shower area, basin , toilet and the removal of any mould</td>
                                    </tr>
                                    <tr className="hover-card">
                                        <td>3</td>
                                        <td>Upholstery steam cleaning</td>
                                        <td>R2000.00 to R5000.00</td>
                                        <td>This entails the deep cleaning with a seam cleaning machine remove stains from upholstery using a special and fragrant detergent</td>
                                    </tr>
                                    <tr className="hover-card">
                                        <td>4</td>
                                        <td>Vehicle upholstery steam cleaning</td>
                                        <td>R1500.00 to R2500.00</td>
                                        <td>This entails the deep cleaning with a seam cleaning machine remove stains from upholstery in the vehicle, bootlid/tailgate area of a vehicle as well as the engine compartment removing any excess oil or grease </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>            
                </Container>
            </header> 
        </Template>
    )
};

export default Services;