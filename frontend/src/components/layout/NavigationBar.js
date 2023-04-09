import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cameras from "../categories/Cameras";
import Foods from "../categories/Foods";
import Accessories from "../categories/Accessories";
import Electronics from "../categories/Electronics";
import Headphones from "../categories/Headphones";
import Laptops from "../categories/Laptops";
const NavigationBar = () => {
  return (
    <>
      <Router>
        <Navbar bg="light" variant="light">
          <Container className="justify-content-center sticky-top">
            <Nav className="">
              <Link to="/electronics" className="nav-link">
                Electronics
              </Link>
              <Link to="/laptops" className="nav-link">
                Laptops
              </Link>
              <Link to="/accessories" className="nav-link">
                Accessories
              </Link>
              <Link to="/cameras" className="nav-link">
                Cameras
              </Link>
              <Link to="/foods" className="nav-link">
                Foods
              </Link>
              <Link to="/headphones" className="nav-link">
                Headphones
              </Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/laptops" element={<Laptops />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/cameras" element={<Cameras />} />
          <Route path="/foods" element={<Foods />} />
          <Route path="/headphones" element={<Headphones />} />
        </Routes>
      </Router>
    </>
  );
};

export default NavigationBar;
