import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import NavigationBar from "./components/layout/NavigationBar";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/Home";
import ProductDetails from "./components/product/ProductDetails";

function App() {
  return (
    <Router>
      <>
        <div className="NavigationBar">
          <Header />
          <div className="container container-fluid">
            <NavigationBar></NavigationBar>
            <Route path="/" component={Home} exact />
            <Route path="/product/:id" component={ProductDetails} exact />
          </div>
          <Footer />
        </div>
      </>
    </Router>
  );
}

export default App;
