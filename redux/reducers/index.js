import { combineReducers } from 'redux';
import blog from './blog';
import app from './app';
import user from './user';
import products from './products';

const rootReducer = combineReducers({
    blog,
    app,
    user,
    products,
});

export default rootReducer;