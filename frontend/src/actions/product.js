import axios from 'axios';
import {
  PRODUCTS_ERROR,
  ADD_PRODUCT,
  ORDER_PRODUCT,
  GET_PRODUCTS,
  GET_PRODUCT,
  DISPATCH_PRODUCT,
  CANCEL_PRODUCT,
  EDIT_ORDER_PRODUCT
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
// get product
export const getProduct = (id) => async dispatch => {
  try {
    const res = await axios.get(`/api/customer/product/${id}`);

    dispatch({
      type: GET_PRODUCT,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PRODUCTS_ERROR,
      payload: { msg: "error" }
    });
  }
};
// dispatch product
export const dispatchProduct = (id) => async dispatch => {
  try {
    const res = await axios.get(`/api/vendor/dispatch/${id}`);

    dispatch({
      type: DISPATCH_PRODUCT,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PRODUCTS_ERROR,
      payload: { msg: "error" }
    });
  }
};
// cancel product
export const cancelProduct = (id) => async dispatch => {
  try {
    const res = await axios.get(`/api/vendor/cancel/${id}`);

    dispatch({
      type: CANCEL_PRODUCT,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PRODUCTS_ERROR,
      payload: { msg: "error" }
    });
  }
};
// order product
export const orderProduct = (quantity,id) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const body = JSON.stringify({ quantity });

    const res =await axios.post(`/api/customer/order/${id}`,body,config);

    dispatch({
      type: ORDER_PRODUCT,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PRODUCTS_ERROR,
      payload: { msg: "error" }
    });
  }
};

// edit order product
export const editOrderProduct = (quantity,id) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const body = JSON.stringify({ quantity });

    const res =await axios.post(`/api/customer/order/edit/${id}`,body,config);

    dispatch({
      type: EDIT_ORDER_PRODUCT,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PRODUCTS_ERROR,
      payload: { msg: "error" }
    });
  }
};