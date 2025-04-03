import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FaHome, FaUser, FaEnvelope } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
<Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="px-3">
  <Navbar.Brand href="#home">Robert Freitas</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about">Sobre</Nav.Link>
      <Nav.Link href="#contact">Contato</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

  );
};

export default Header;
