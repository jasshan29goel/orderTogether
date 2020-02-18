import axios from 'axios';
import {
  REVIEW_VENDOR,
  USERS_ERROR
} from './types';

// add vendor review
export const reviewVendor = (id,rating) => async dispatch => {
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
      }
    };
    const body = JSON.stringify({ rating });
  
    try {
      const res =await axios.post(`/api/customer/vendor/rate/${id}`,body,config);
  
      dispatch({
        type: REVIEW_VENDOR,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: USERS_ERROR,
        payload: { msg: "error" }
      });
    }
  };