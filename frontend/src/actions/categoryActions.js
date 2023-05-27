import axios from "axios";
import {
  NEW_CATEGORY_FAIL,
  NEW_CATEGORY_REQUEST,
  NEW_CATEGORY_SUCCESS,
  GET_CATEGORYS_REQUEST,
  GET_CATEGORYS_FAIL,
  GET_CATEGORYS_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/categoryConstants";

export const newCategory = (categoryData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_CATEGORY_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `/api/v1/admin/category/add`,
      categoryData,
      config
    );

    console.log(data);

    dispatch({
      type: NEW_CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_CATEGORY_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get categories
export const getCategories = () => async (dispatch) => {
  try {
    dispatch({ type: GET_CATEGORYS_REQUEST });

    const { data } = await axios.get("/api/v1/admin/categories");

    dispatch({
      type: GET_CATEGORYS_SUCCESS,
      payload: data.categories,
    });
  } catch (error) {
    dispatch({
      type: GET_CATEGORYS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clear errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
