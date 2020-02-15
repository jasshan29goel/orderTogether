import axios from 'axios';
import {
  PRODUCTS_ERROR,
  ADD_PRODUCT,
  GET_PRODUCTS,
} from './types';



// add products
export const addProduct = (name,price,quantity) => async dispatch => {
    
  const config = {
    headers: {
      'Content-Type': 'application/json',
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

// get products
export const getProducts = (token) => async dispatch => {
  try {

    const res = await axios.get('/api/vendor');

    dispatch({
      type: GET_PRODUCTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PRODUCTS_ERROR,
      payload: { msg: "error" }
    });
  }
};
