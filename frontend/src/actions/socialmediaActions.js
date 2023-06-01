// actions/socialMediaActions.js
import axios from 'axios';
import { FETCH_SOCIAL_MEDIA_LINKS } from '../constants/socialmediaConstants';

export const fetchSocialMediaLinks = () => (dispatch) => {
  axios.get('/api/v1/socialmedia')
    .then((response) => {
      dispatch({
        type: FETCH_SOCIAL_MEDIA_LINKS,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.error('Error fetching social media links:', error);
    });
};
