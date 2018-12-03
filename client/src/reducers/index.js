import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import coinReducer from './coinReducer';
import transactionReducer from './transactionReducer';

export default combineReducers({
    auth: authReducer,
    coins: coinReducer,
    form: reduxForm,
    transactions: transactionReducer
});