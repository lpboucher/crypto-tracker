import { combineReducers } from 'redux';
import authReducer from './authReducer';
import coinReducer from './coinReducer';

export default combineReducers({
    auth: authReducer,
    coins: coinReducer
});