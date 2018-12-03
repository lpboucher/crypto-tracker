import axios from 'axios';
import { FETCH_USER, FETCH_COINS, FETCH_TRANSACTIONS, SUBMIT_TRADE } from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/auth/current_user');
    
    dispatch({type: FETCH_USER, payload: res.data});
};

export const fetchCoins = (count=20) => async dispatch => {
    const res = await axios.get(`https://api.coinmarketcap.com/v2/ticker/?convert=EUR&limit=${count}&structure=array`);

    dispatch({type: FETCH_COINS, payload: res.data});
};

export const fetchTransactions = () => async dispatch => {
    const res = await axios.get('/api/trades');
    console.log(res);

    dispatch({type: FETCH_TRANSACTIONS, payload: res.data});
};

export const submitTrade = (trade) => async dispatch => {
    const res = await axios.post('/api/trade', trade);

    dispatch({type: SUBMIT_TRADE, payload: trade});
};