import {
  GET_ALL_AFFILIATES_SUCCESS,
  GET_ALL_AFFILIATES_FAIL,
  CREATE_AFFILIATE_SUCCESS,
  CREATE_AFFILIATE_FAIL,
  DELETE_AFFILIATE_SUCCESS,
  DELETE_AFFILIATE_FAIL,
} from "../constants/affiliateConstants";

const initialState = {
  affiliateList: [],
  error: null,
};

export const affiliateReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_AFFILIATES_SUCCESS:
      return {
        ...state,
        affiliateList: action.payload,
        error: null,
      };
    case GET_ALL_AFFILIATES_FAIL:
      return {
        ...state,
        affiliateList: [],
        error: action.payload,
      };
    case CREATE_AFFILIATE_SUCCESS:
      return {
        ...state,
        affiliateList: [...state.affiliateList, action.payload],
        error: null,
      };
    case CREATE_AFFILIATE_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case DELETE_AFFILIATE_SUCCESS:
      return {
        ...state,
        affiliateList: state.affiliateList.filter(
          (affiliate) => affiliate._id !== action.payload
        ),
        error: null,
      };
    case DELETE_AFFILIATE_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default affiliateReducers;
