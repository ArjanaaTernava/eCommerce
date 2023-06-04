
import { FETCH_AFFILIATE_LINKS } from '../constants/affiliateConstants';

const initialState = {
  affiliateLinks: [],
};

export const affiliateReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AFFILIATE_LINKS:
      return {
        ...state,
        affiliateLinks: action.payload,
      };
    default:
      return state;
  }
};

