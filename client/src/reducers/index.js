import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from '../ducks/auth';
import coinReducer from '../ducks/coins';
import transactionReducer from '../ducks/trades';
import viewsReducer from '../ducks/views';

export default combineReducers({
    auth: authReducer,
    coins: coinReducer,
    form: reduxForm,
    transactions: transactionReducer,
    views: viewsReducer,
});