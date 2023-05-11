import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useEffect } from "react";
import "./App.css";
import NavigationBar from "./components/layout/NavigationBar";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/Home";
import ProductDetails from "./components/product/ProductDetails";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Profile from "./components/user/Profile";
import UpdateProfile from "./components/user/UpdateProfile";

import ProtectedRoute from "./components/route/ProtectedRoute";
import { loadUser, updateProfile } from "./actions/userActions";
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
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/me" component={Profile} exact />
              <ProtectedRoute path="/me" component={Profile} exact />
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
