import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link , useLocation} from "react-router-dom";
import "../App.css";
import ModalContact from "./ModalContact";

const NavBar = () => {
  const location = useLocation();
  return (
    <Navbar expand="lg" className="fixed-top navB mb-5 container-fluid">
      <Navbar.Brand as={Link} to="/" className="ms-auto px-3">
        <strong>UMFAZI <br/> Clean and Tidy </strong>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto px-3" aria-controls="" style={{ color: "blue", justifyContent: "flex-end"}}>
          <Nav.Link as={Link} to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about" className={location.pathname === "/about" ? "active" : ""}>
            About
          </Nav.Link>       
          <Nav.Link as={Link} to="/services" className={location.pathname === "/services" ? "active" : ""}>
            Services
          </Nav.Link>
          <Nav.Link as={Link} to="/getAQuote" className={location.pathname === "/getAQuote" ? "active" : ""}>
            Get a free quote
          </Nav.Link>
            {/* <Nav.Link as={Link} to="/gallery className={location.pathname === "/gallery" ? "active" : ""}">
            Gallery
          </Nav.Link> */}
          {/* <Nav.Link as={Link} to="/testimonials" className={location.pathname === "/testimonials" ? "active" : ""}>
            Testimonials
          </Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
      <div className="navContact" style={{marginRight: "20px"}}>
        <ModalContact />
      </div>
    </Navbar>
  );
};

export default NavBar;
