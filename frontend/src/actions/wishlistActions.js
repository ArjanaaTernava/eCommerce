import axios from 'axios';
import {
  ADD_TO_WISHLIST_REQUEST,
  ADD_TO_WISHLIST_SUCCESS,
  ADD_TO_WISHLIST_FAIL,
  GET_WISHLIST_REQUEST,
  GET_WISHLIST_SUCCESS,
  GET_WISHLIST_FAIL,
  REMOVE_FROM_WISHLIST_REQUEST,
  REMOVE_FROM_WISHLIST_SUCCESS,
  REMOVE_FROM_WISHLIST_FAIL,
} from '../constants/wishlistConstants';

// Add item to wishlist
export const addToWishlist = (productId, isLiked) => async (dispatch, getState) => {
  try {
    dispatch({ type: ADD_TO_WISHLIST_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getState().userLogin.userInfo.token}`,
      },
    };

    const { data } = await axios.post('/api/v1/wishlist/add', { product: productId, isLiked }, config);

    dispatch({
      type: ADD_TO_WISHLIST_SUCCESS,
      payload: data.wishlist,
    });
  } catch (error) {
    dispatch({
      type: ADD_TO_WISHLIST_FAIL,
      payload: error.response && error.response.data.error ? error.response.data.error : error.message,
    });
  }
};

// Get wishlist items
export const getWishlistItems = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_WISHLIST_REQUEST });

    const config = {
      headers: {
        Authorization: `Bearer ${getState().userLogin.userInfo.token}`,
      },
    };

    const { data } = await axios.get('/api/v1/wishlist', config);

    dispatch({
      type: GET_WISHLIST_SUCCESS,
      payload: data.wishlist,
    });
  } catch (error) {
    dispatch({
      type: GET_WISHLIST_FAIL,
      payload: error.response && error.response.data.error ? error.response.data.error : error.message,
    });
  }
};

// Remove item from wishlist
export const removeItemFromWishlist = (productId) => async (dispatch, getState) => {
  try {
    dispatch({ type: REMOVE_FROM_WISHLIST_REQUEST });

    const config = {
      headers: {
        Authorization: `Bearer ${getState().userLogin.userInfo.token}`,
      },
    };

    await axios.delete(`/api/v1/wishlist/${productId}`, config);

    dispatch({
      type: REMOVE_FROM_WISHLIST_SUCCESS,
      payload: productId,
    });
  } catch (error) {
    dispatch({
      type: REMOVE_FROM_WISHLIST_FAIL,
      payload: error.response && error.response.data.error ? error.response.data.error : error.message,
    });
  }
};
