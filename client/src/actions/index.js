import axios from 'axios';
import { FETCH_USER, FETCH_COINS, FETCH_TRANSACTIONS, UPDATE_PRICES, SUBMIT_TRADE_SUCCESS, OPEN_MODAL, CLOSE_MODAL } from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/auth/current_user');
    
    dispatch({type: FETCH_USER, payload: res.data});
};

export const fetchCoins = () => async dispatch => {
    const res = await axios.get(`https://api.coinmarketcap.com/v2/ticker/?convert=EUR&structure=array`);
    //const prices = res.data.data.filter(cur => cur.symbol === "BTC" || cur.symbol === "ETH");
    
    dispatch({type: FETCH_COINS, payload: res.data});
    //dispatch({type: UPDATE_PRICES, payload: prices});
};

export const fetchTransactions = () => async dispatch => {
    const res = await axios.get('/api/trades');

    dispatch({type: FETCH_TRANSACTIONS, payload: res.data});
};

export const submitTrade = (trade) => async dispatch => {
    const res = await axios.post('/api/trade', trade);
    console.log(res.statusText);

    if (res.statusText !== 'Created') {
        //dispatch({type: SUBMIT_TRADE, payload: trade});
    } else {
        dispatch({type: SUBMIT_TRADE_SUCCESS});
    }
};

export const openModal = () => dispatch => {
    dispatch({type: OPEN_MODAL})
}

export const closeModal = () => dispatch => {
    dispatch({type: CLOSE_MODAL})
}