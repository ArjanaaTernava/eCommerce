import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import NavigationBar from "./components/layout/NavigationBar";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/Home";
import ProductDetails from "./components/product/ProductDetails";
import Login from './components/user/Login'
import Register from "./components/user/Register";


function App() {
  return (
    <>
    <NavigationBar/>
    <Router>
        <div className="NavigationBar">
          <Header />
          <div className="container container-fluid">
            <Routes>
            <Route path="/" component={Home} exact />
            <Route path="/search/:keyword" component={Home} />
            <Route path="/product/:id" component={ProductDetails} exact />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            </Routes>
          </div>
          <Footer />
        </div>
    </Router>
    </>
  );
}

export default App;
