import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import coinReducer from './coinReducer';

export default combineReducers({
    auth: authReducer,
    coins: coinReducer,
    form: reduxForm,
});