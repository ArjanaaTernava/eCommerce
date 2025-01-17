import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  productsReducer,
  newProductReducer,
  productDetailsReducer,
  newReviewReducer,
  productReducer,
  productReviewsReducer,
  reviewReducer,
} from "./reducers/productReducers";

import {
  authReducer,
  userReducer,
  forgotPasswordReducer,
  allUsersReducer,
  userDetailsReducer,
} from "./reducers/userReducers";
import { cartReducer } from "./reducers/cartReducers";
import {
  newOrderReducer,
  myOrdersReducer,
  orderDetailsReducer,
  allOrdersReducer,
  orderReducer,
} from "./reducers/orderReducers";

import {
  categoryReducer,
  getCategoriesReducer,
  getCategoryReducer,
  newCategoryReducer,
} from "./reducers/categoryReducers";
import {
  newSellerReducer,
  getSellersReducer,
  sellerReducer,
  getSellerReducer,
} from "./reducers/sellerReducers";
import { supportReducer } from "./reducers/supportReducers";

import { socialMediaReducer } from "./reducers/socialmediaReducers";

import { affiliateReducer } from "./reducers/affiliateReducers";

const reducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
  newProduct: newProductReducer,
  product: productReducer,
  productReviews: productReviewsReducer,
  review: reviewReducer,
  auth: authReducer,
  user: userReducer,
  allUsers: allUsersReducer,
  userDetails: userDetailsReducer,
  forgotPassword: forgotPasswordReducer,
  cart: cartReducer,
  newOrder: newOrderReducer,
  myOrders: myOrdersReducer,
  allOrders: allOrdersReducer,
  orderDetails: orderDetailsReducer,
  order: orderReducer,
  newReview: newReviewReducer,
  category: categoryReducer,
  newCategory: newCategoryReducer,
  getCategories: getCategoriesReducer,
  getCategory: getCategoryReducer,
  newSeller: newSellerReducer,
  getSellers: getSellersReducer,
  seller: sellerReducer,
  support: supportReducer,
  getSeller: getSellerReducer,
  socialMedia: socialMediaReducer,
  affiliate: affiliateReducer,
});

let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
