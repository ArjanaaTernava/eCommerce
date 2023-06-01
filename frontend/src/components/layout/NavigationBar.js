import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Product from "../product/Product";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavigationBar = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const { loading, products } = useSelector((state) => state.products);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : [];

  return (
    <div>
      <Navbar bg="light" className="navbartest" expand="lg">
        <Container className="sticky-top">
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbartest"/>
          <Navbar.Collapse id="basic-navbar-nav" className="navbartest">
            <Nav className="mr-auto navbartest">
              <Link
                to="/electronics"
                onClick={() => handleCategoryClick("Electronics")}
                className="nav-link mr-2"
              >
                Electronics
              </Link>
              <Link
                to="/laptops"
                onClick={() => handleCategoryClick("Laptops")}
                className="nav-link mr-2"
              >
                Laptops
              </Link>
              <Link
                to="/accessories"
                onClick={() => handleCategoryClick("Accessories")}
                className="nav-link mr-2"
              >
                Accessories
              </Link>
              <Link
                to="/cameras"
                onClick={() => handleCategoryClick("Cameras")}
                className="nav-link mr-2"
              >
                Cameras
              </Link>
              <Link
                to="/foods"
                onClick={() => handleCategoryClick("Foods")}
                className="nav-link mr-2"
              >
                Foods
              </Link>
              <Link
                to="/headphones"
                onClick={() => handleCategoryClick("Headphones")}
                className="nav-link"
              >
                Headphones
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="col-6 col-md-9">
            <div className="row">
              {filteredProducts.map((product) => (
                <Product key={product._id} product={product} col={4} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default NavigationBar;
