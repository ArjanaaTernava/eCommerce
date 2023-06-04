import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div>
      <Navbar bg="light" className="navbartest" expand="lg">
        <Container className="sticky-top">
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="navbartest"
          />
          <Navbar.Collapse id="basic-navbar-nav" className="navbartest">
            <Nav className="mr-auto navbartest">
              <Link to="/electronics" className="nav-link mr-2">
                Electronics
              </Link>
              <Link to="/laptops" className="nav-link mr-2">
                Laptops
              </Link>
              <Link to="/accessories" className="nav-link mr-2">
                Accessories
              </Link>
              <Link to="/cameras" className="nav-link mr-2">
                Cameras
              </Link>
              <Link to="/foods" className="nav-link mr-2">
                Foods
              </Link>
              <Link to="/headphones" className="nav-link">
                Headphones
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
