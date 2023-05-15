import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useEffect, useState } from "react";
import "./App.css";
import NavigationBar from "./components/layout/NavigationBar";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/Home";
import ProductDetails from "./components/product/ProductDetails";

// Cart imports
import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";
import ConfirmOrder from "./components/cart/ConfirmOrder";
import Payment from "./components/cart/Payment";
import OrderSuccess from "./components/cart/OrderSuccess";

//Order imports
import ListOrders from "./components/order/ListOrders";
import OrderDetails from "./components/order/OrderDetails";

// Auth or User imports
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Profile from "./components/user/Profile";
import UpdateProfile from "./components/user/UpdateProfile";
import ProtectedRoute from "./components/route/ProtectedRoute";
import { loadUser } from "./actions/userActions";
import UpdatePassword from "./components/user/UpdatePassword";
import ForgotPassword from "./components/user/forgotPassword";
import NewPassword from "./components/user/NewPassword";

import { useSelector } from "react-redux";

// Admin imports
import Dashboard from "./components/admin/Dashboard";
import ProductsList from "./components/admin/ProductsList";
import NewProduct from "./components/admin/NewProduct";
import UpdateProduct from "./components/admin/UpdateProduct";
import OrdersList from "./components/admin/OrdersLIst";
import ProcessOrder from "./components/admin/ProcessOrder";

import store from "./store";
import axios from "axios";

// Payment
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

function App() {
  const [stripeApiKey, setStripeApiKey] = useState("");

  useEffect(() => {
    store.dispatch(loadUser());

    async function getStripeApiKey() {
      const { data } = await axios.get("/api/v1/stripeapi");
      setStripeApiKey(data.stripeApiKey);
    }

    getStripeApiKey();
  }, []);

  const { user, loading } = useSelector((state) => state.auth);

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
              <ProtectedRoute path="/success" component={OrderSuccess} />
              {stripeApiKey && (
                <Elements stripe={loadStripe(stripeApiKey)}>
                  <ProtectedRoute path="/payment" component={Payment} />
                </Elements>
              )}

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
              <ProtectedRoute path="/orders/me" component={ListOrders} exact />
              <ProtectedRoute
                path="/order/:id"
                component={OrderDetails}
                exact
              />
              <ProtectedRoute
                path="/me/update"
                component={UpdateProfile}
                exact
              />
            </Routes>
          </div>
          <ProtectedRoute
            path="/dashboard"
            isAdmin={true}
            component={Dashboard}
            exact
          />
          <ProtectedRoute
            path="/admin/products"
            isAdmin={true}
            component={ProductsList}
            exact
          />
          <ProtectedRoute
            path="/admin/product"
            isAdmin={true}
            component={NewProduct}
            exact
          />
          <ProtectedRoute
            path="/admin/product/:id"
            isAdmin={true}
            component={UpdateProduct}
            exact
          />
           <ProtectedRoute
            path="/admin/orders"
            isAdmin={true}
            component={OrdersList}
            exact
          />
          <ProtectedRoute
            path="/admin/order/:id"
            isAdmin={true}
            component={ProcessOrder}
            exact
          />

          {!loading && user.role !== "admin" && <Footer />}
        </div>
      </Router>
    </>
  );
}

export default App;
