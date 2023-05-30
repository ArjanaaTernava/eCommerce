import axios from "axios";
import {
  NEW_SELLER_FAIL,
  NEW_SELLER_REQUEST,
  NEW_SELLER_SUCCESS,
  GET_SELLERS_REQUEST,
  GET_SELLERS_FAIL,
  GET_SELLERS_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/sellerConstants";

export const newSeller = (sellerData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_SELLER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `/api/v1/admin/seller/add`,
      sellerData,
      config
    );

    console.log(data);

    dispatch({
      type: NEW_SELLER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_SELLER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get sellers
export const getSellers = () => async (dispatch) => {
  try {
    dispatch({ type: GET_SELLERS_REQUEST });

    const { data } = await axios.get("/api/v1/admin/sellers");
    dispatch({
      type: GET_SELLERS_SUCCESS,
      payload: data.sellers,
    });
  } catch (error) {
    dispatch({
      type: GET_SELLERS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clear errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
