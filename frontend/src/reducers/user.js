import {
    REVIEW_VENDOR,
    USERS_ERROR
} from '../actions/types';
  
const initialState = {
    persons: [],
    person: null,
    loading: true,
    error: {}
};
  
export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case REVIEW_VENDOR:
        return {
            ...state,
            person: payload,
            loading: false
        };
        case USERS_ERROR:
            return {
              ...state,
              error: payload,
              loading: false
        };
        default:
        return state;
    }
}