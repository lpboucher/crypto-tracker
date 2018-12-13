import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import coinReducer from './coinReducer';
import priceReducer from './priceReducer';
import transactionReducer from './transactionReducer';

export default combineReducers({
    auth: authReducer,
    coins: coinReducer,
    prices: priceReducer,
    form: reduxForm,
    transactions: transactionReducer
});