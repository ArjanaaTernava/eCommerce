import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Product from "../product/Product";
import { Container, Nav, Navbar } from "react-bootstrap";
//TO DO- Fix after reloading
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
      <Navbar bg="light" className="navbartest">
        <Container className="sticky-top navbartest">
          <Nav className="navbartest">
            <nav
              className="navbartest"
              style={{ backgroundColor: "white", display: "flex" }}
            >
              <Link
                to="/electronics"
                onClick={() => handleCategoryClick("Electronics")}
                className="nav-link"
              >
                Electronics
              </Link>
              <Link
                to="/laptops"
                onClick={() => handleCategoryClick("Laptops")}
                className="nav-link"
              >
                Laptops
              </Link>
              <Link
                to="/accessories"
                onClick={() => handleCategoryClick("Accessories")}
                className="nav-link"
              >
                Accessories
              </Link>
              <Link
                to="/cameras"
                onClick={() => handleCategoryClick("Cameras")}
                className="nav-link"
              >
                Cameras
              </Link>
              <Link
                to="/foods"
                onClick={() => handleCategoryClick("Foods")}
                className="nav-link"
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
            </nav>
          </Nav>
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
