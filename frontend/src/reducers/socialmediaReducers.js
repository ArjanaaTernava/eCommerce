// reducers/socialMediaReducer.js
import { FETCH_SOCIAL_MEDIA_LINKS } from '../constants/socialmediaConstants';

const initialState = {
  socialMediaLinks: [],
};

export const socialMediaReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SOCIAL_MEDIA_LINKS:
      return {
        ...state,
        socialMediaLinks: action.payload,
      };
    default:
      return state;
  }
};

