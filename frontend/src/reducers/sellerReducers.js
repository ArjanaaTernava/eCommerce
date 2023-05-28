import {
  DELETE_SELLER_FAIL,
  DELETE_SELLER_REQUEST,
  DELETE_SELLER_RESET,
  DELETE_SELLER_SUCCESS,
  GET_SELLERS_FAIL,
  GET_SELLERS_REQUEST,
  GET_SELLERS_SUCCESS,
  NEW_SELLER_FAIL,
  NEW_SELLER_REQUEST,
  NEW_SELLER_RESET,
  NEW_SELLER_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/sellerConstants";

export const newSellerReducer = (state = { seller: [] }, action) => {
  switch (action.type) {
    case NEW_SELLER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case NEW_SELLER_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        seller: action.payload.seller,
      };

    case NEW_SELLER_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case NEW_SELLER_RESET:
      return {
        ...state,
        success: false,
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

export const getSellersReducer = (state = { sellers: [] }, action) => {
  switch (action.type) {
    case GET_SELLERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_SELLERS_SUCCESS:
      return {
        ...state,
        loading: false,
        sellers: action.payload,
      };

    case GET_SELLERS_FAIL:
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
