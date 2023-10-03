import React from 'react';
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';
import '../App.css';


const NavBar = () => {
    return (
        <Navbar expand="lg" className="fixed-top navB"> 
            <Navbar.Brand as={Link} to="/" className="ms-auto px-3">Clean and Tidy Bros</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto px-3" style={{color: "blue"}}>
                    <Nav.Link as={Link} to="/Home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/About">About</Nav.Link>
                    <Nav.Link as={Link} to="/Gallery">Gallery</Nav.Link>
                    <Nav.Link as={Link} to="/Services">Services</Nav.Link>
                    <Nav.Link as={Link} to="/GetAQuote">Get a free quote</Nav.Link>
                    <Nav.Link as={Link} to="/Testimonials">Testimonials</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Button className="ms-auto px-3" >Contact Us</Button>
        </Navbar>
    )
};

export default NavBar;