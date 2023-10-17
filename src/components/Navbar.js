import React from 'react';
import { Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';
import '../App.css';
import ModalContact from './ModalContact';


const NavBar = () => {
    return (
        <Navbar expand="lg" className="fixed-top navB mb-5 container-fluid"> 
            <Navbar.Brand as={Link} to="/" className="ms-auto px-3">Clean and Tidy Bros</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto px-3" style={{color: "blue"}}>
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
                    <Nav.Link as={Link} to="/services">Services</Nav.Link>
                    <Nav.Link as={Link} to="/getAQuote">Get a free quote</Nav.Link>
                    <Nav.Link as={Link} to="/testimonials">Testimonials</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <ModalContact />
        </Navbar>
    )
};

export default NavBar;