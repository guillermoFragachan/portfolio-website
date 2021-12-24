import React from "react";
import Navbar from 'react-bootstrap/Navbar' 
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'



function Navigation() {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Guillermo Fragachan</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Portfolio</Nav.Link>
          <Nav.Link href="#features">Contact</Nav.Link>
          <Nav.Link href="#pricing">Resume</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    );
}

export default Navigation;