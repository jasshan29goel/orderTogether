import {
    PRODUCTS_ERROR,
    ADD_PRODUCT,
    GET_PRODUCTS
} from '../actions/types';
  
const initialState = {
    products: [],
    product: null,
    loading: true,
    error: {}
};
  
export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case ADD_PRODUCT:
        return {
            ...state,
            products: [payload, ...state.products],
            loading: false
        };
        case GET_PRODUCTS:
            return {
                ...state,
                products: payload,
                loading: false
            };
        case PRODUCTS_ERROR:
            return {
              ...state,
              error: payload,
              loading: false
        };
        default:
        return state;
    }
}