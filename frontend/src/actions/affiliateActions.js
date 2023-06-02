import axios from "axios";
import {
  GET_ALL_AFFILIATES_SUCCESS,
  GET_ALL_AFFILIATES_FAIL,
  CREATE_AFFILIATE_SUCCESS,
  CREATE_AFFILIATE_FAIL,
  DELETE_AFFILIATE_SUCCESS,
  DELETE_AFFILIATE_FAIL,
} from "../constants/affiliateConstants";

export const fetchAffiliateLinks = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/v1/affiliates");
    dispatch({
      type: GET_ALL_AFFILIATES_SUCCESS,
      payload: response.data.affiliates,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_AFFILIATES_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const createAffiliate = (affiliateData) => async (dispatch) => {
  try {
    const response = await axios.post("/api/v1/affiliates", affiliateData);
    dispatch({
      type: CREATE_AFFILIATE_SUCCESS,
      payload: response.data.affiliate,
    });
  } catch (error) {
    dispatch({
      type: CREATE_AFFILIATE_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const deleteAffiliate = (affiliateId) => async (dispatch) => {
  try {
    await axios.delete(`/api/v1/affiliates/${affiliateId}`);
    dispatch({
      type: DELETE_AFFILIATE_SUCCESS,
      payload: affiliateId,
    });
  } catch (error) {
    dispatch({
      type: DELETE_AFFILIATE_FAIL,
      payload: error.response.data.message,
    });
  }
};
