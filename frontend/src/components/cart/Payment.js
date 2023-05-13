import React, { Fragment, useEffect } from "react";
import MetaData from "../layout/MetaData";
import CheckoutSteps from "./CheckoutSteps";

import { alert, useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";

import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import axios from "axios";

const options = {
  style: {
    base: {
      fontSize: "16px",
    },
    invalid: {
      color: "#9e2146",
    },
  },
};

const Payment = ({ history }) => {
  const alert = useAlert();
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { cartItems, shippingInfo } = useSelector((state) => state.cart);

  useEffect(() => {}, []);

  const orderInfo = JSON.parse(sessionStorage.getItem('orderInfo'));

  const paymentData = {
    amount: Math.round(orderInfo.totalPrice * 100)//pass the amount in cents
}
const submitHandler = async (e) => {
  e.preventDefault();
  document.querySelector('#pay_btn').disabled = true; //cant click multiple times

  let res;
  try {
//post request
      const config = {
          headers: {
              'Content-Type': 'application/json'
          }
      }

      res = await axios.post('/api/v1/payment/process', paymentData, config)
      const clientSecret = res.data.client_secret;

      console.log(clientSecret);

      if (!stripe || !elements) {
          return;
      }

      const result = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
              card: elements.getElement(CardNumberElement),
              billing_details: {
                  name: user.name,
                  email: user.email
              }
          }
      });


  } catch (error) {
      document.querySelector('#pay_btn').disabled = false;
      alert.error(error.response.data.message)
  }
}


  return (
    <Fragment>
      <MetaData title={"Payment"} />

      <CheckoutSteps shipping confirmOrder payment />

      <div class="row wrapper">
        <div class="col-10 col-lg-5">
          <form class="shadow-lg">
            <h1 class="mb-4">Card Info</h1>
            <div class="form-group" onSubmit={submitHandler}>
              <label htmlFor="card_num_field">Card Number</label>
              {/* Will automatically validate */}
              <CardNumberElement
                type="text"
                id="card_num_field"
                class="form-control"
                options={options}
              />
            </div>

            <div class="form-group">
              <label htmlFor="card_exp_field">Card Expiry</label>
              <CardExpiryElement
                type="text"
                id="card_exp_field"
                class="form-control"
                options={options}
              />
            </div>

            <div class="form-group">
              <label htmlFor="card_cvc_field">Card CVC</label>
              <CardCvcElement
                type="text"
                id="card_cvc_field"
                class="form-control"
                options={options}
              />
            </div>

            <button id="pay_btn" type="submit" class="btn btn-block py-3">
              Pay
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Payment;
