import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useEffect } from "react";
import "./App.css";
import NavigationBar from "./components/layout/NavigationBar";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/Home";
import ProductDetails from "./components/product/ProductDetails";

import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";
import ConfirmOrder from "./components/cart/ConfirmOrder";

import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Profile from "./components/user/Profile";
import UpdateProfile from "./components/user/UpdateProfile";

import ProtectedRoute from "./components/route/ProtectedRoute";
import { loadUser } from "./actions/userActions";
import UpdatePassword from "./components/user/UpdatePassword";
import ForgotPassword from "./components/user/forgotPassword";
import NewPassword from "./components/user/NewPassword";

import store from "./store";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <>
      <NavigationBar />
      <Router>
        <div className="NavigationBar">
          <Header />
          <div className="container container-fluid">
            <Routes>
              <Route path="/" component={Home} exact />
              <Route path="/search/:keyword" component={Home} />
              <Route path="/product/:id" component={ProductDetails} exact />

              <Route path="/cart" component={Cart} exact />
              <ProtectedRoute path="/shipping" component={Shipping} />
              <ProtectedRoute path="/order/confirm" component={ConfirmOrder} />

              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/me" component={Profile} exact />
              <Route path="/password/forgot" component={ForgotPassword} exact />
              <Route
                path="/password/reset/:token"
                component={NewPassword}
                exact
              />
              <ProtectedRoute
                path="/me/update"
                component={UpdateProfile}
                exact
              />
              <ProtectedRoute
                path="/password/update"
                component={UpdatePassword}
                exact
              />

              <ProtectedRoute
                path="/me/update"
                component={UpdateProfile}
                exact
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
