import {
  NEW_CATEGORY_FAIL,
  NEW_CATEGORY_REQUEST,
  NEW_CATEGORY_RESET,
  NEW_CATEGORY_SUCCESS,
  GET_CATEGORYS_FAIL,
  GET_CATEGORYS_REQUEST,
  GET_CATEGORYS_SUCCESS,
  CLEAR_ERRORS,
  GET_CATEGORY_BY_ID_REQUEST,
  GET_CATEGORY_BY_ID_SUCCESS,
  GET_CATEGORY_BY_ID_FAILURE
} from "../constants/categoryConstants";

export const newCategoryReducer = (state = { category: [] }, action) => {
  switch (action.type) {
    case NEW_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case NEW_CATEGORY_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        category: action.payload.category,
      };

    case NEW_CATEGORY_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case NEW_CATEGORY_RESET:
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


export const getCategoriesReducer = (state = { categories: [] }, action) => {
    switch (action.type) {
      case GET_CATEGORYS_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case GET_CATEGORYS_SUCCESS:
        return {
          ...state,
          loading: false,
          categories: action.payload,
        };
  
      case GET_CATEGORYS_FAIL:
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

  export const getCategoryReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_CATEGORY_BY_ID_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
      case GET_CATEGORY_BY_ID_SUCCESS:
        return {
          ...state,
          loading: false,
          category: action.payload
        };
      case GET_CATEGORY_BY_ID_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };