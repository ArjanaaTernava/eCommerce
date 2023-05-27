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
    CLEAR_ERRORS,
  } from '../constants/wishlistConstants';
  
  export const wishlistReducer = (state = { wishlistItems: [] }, action) => {
    switch (action.type) {
      case ADD_TO_WISHLIST_REQUEST:
      case GET_WISHLIST_REQUEST:
      case REMOVE_FROM_WISHLIST_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case ADD_TO_WISHLIST_SUCCESS:
        return {
          ...state,
          loading: false,
          wishlistItems: [...state.wishlistItems, action.payload],
        };
  
      case GET_WISHLIST_SUCCESS:
        return {
          ...state,
          loading: false,
          wishlistItems: action.payload,
        };
  
      case REMOVE_FROM_WISHLIST_SUCCESS:
        return {
          ...state,
          loading: false,
          wishlistItems: state.wishlistItems.filter(
            (item) => item.product !== action.payload
          ),
        };
  
      case ADD_TO_WISHLIST_FAIL:
      case GET_WISHLIST_FAIL:
      case REMOVE_FROM_WISHLIST_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };
  