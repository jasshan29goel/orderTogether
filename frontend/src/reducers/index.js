import { combineReducers } from 'redux';
import auth from './auth';
import product from './product';
import user from './user';

export default combineReducers({
    auth,
    product,
    user
});