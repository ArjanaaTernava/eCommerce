import axios from "axios";
import {
  NEW_SELLER_FAIL,
  NEW_SELLER_REQUEST,
  NEW_SELLER_SUCCESS,
  GET_SELLERS_REQUEST,
  GET_SELLERS_FAIL,
  GET_SELLERS_SUCCESS,
  DELETE_SELLER_FAIL,
  DELETE_SELLER_REQUEST,
  DELETE_SELLER_SUCCESS,
  UPDATE_SELLER_FAIL,
  UPDATE_SELLER_REQUEST,
  UPDATE_SELLER_SUCCESS,
  CLEAR_ERRORS,
 GET_SELLER_BY_ID_FAILURE,
 GET_SELLER_BY_ID_REQUEST,
 GET_SELLER_BY_ID_SUCCESS
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

// Delete seller (Admin)
export const deleteSeller = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_SELLER_REQUEST,
    });

    const { data } = await axios.delete(`/api/v1/admin/seller/delete/${id}`);

    dispatch({
      type: DELETE_SELLER_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_SELLER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Seller (Admin)
export const updateSeller = (id, sellerData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_SELLER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.put(
      `/api/v1/admin/seller/update/${id}`,
      sellerData,
      config
    );
    console.log(data);

    dispatch({
      type: UPDATE_SELLER_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_SELLER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clear errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

export const getSellerDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_SELLER_BY_ID_REQUEST,
    });

    const { data } = await axios.get(`/api/v1/admin/seller/${id}`);

    dispatch({
      type: GET_SELLER_BY_ID_SUCCESS,
      payload: data.seller,
    });
  } catch (error) {
    dispatch({
      type: GET_SELLER_BY_ID_FAILURE,
      payload: error.response.data.message,
    });
  }
};