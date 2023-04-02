import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavigationBar = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#">Electronics</Nav.Link>
            <Nav.Link href="#">Laptops</Nav.Link>
            <Nav.Link href="#">Headphones</Nav.Link>
            <Nav.Link href="#">Accessories</Nav.Link>
            <Nav.Link href="#pricing">Cameras</Nav.Link>
            <Nav.Link href="#pricing">Foods</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
