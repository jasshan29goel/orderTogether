import axios from 'axios';
import {
  PRODUCTS_ERROR,
  ADD_PRODUCT,
} from './types';



// add products
export const addProduct = (name,price,quantity,token) => async dispatch => {
    
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token':token
    }
  };
  const body = JSON.stringify({ name, price,quantity });

  try {
    const res =await axios.post(`/api/vendor/add`,body,config);

    dispatch({
      type: ADD_PRODUCT,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PRODUCTS_ERROR,
      payload: { msg: "error" }
    });
  }
};

