// actions/socialMediaActions.js
import axios from 'axios';
import { FETCH_AFFILIATE_LINKS } from '../constants/affiliateConstants';

export const fetchAffiliateLinks = () => (dispatch) => {
  axios.get('/api/v1/affiliates')
    .then((response) => {
      dispatch({
        type: FETCH_AFFILIATE_LINKS,
        payload: response.data.affiliates,
      });
    })
    .catch((error) => {
      console.error('Error fetching affiliate links:', error);
    });

};


