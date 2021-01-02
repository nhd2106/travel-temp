import { combineReducers } from 'redux';
import blog from './blog';
import app from './app';
import user from './user';

const rootReducer = combineReducers({
    blog,
    app,
    user
});

export default rootReducer;