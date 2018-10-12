import axios from 'axios';
import { FETCH_USER, FETCH_COINS } from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/auth/current_user');
    
    dispatch({type: FETCH_USER, payload: res.data});
};

export const fetchCoins = (count) => async dispatch => {
    const res = await axios.get(`https://api.coinmarketcap.com/v2/ticker/?convert=EUR&limit=${count}&structure=array`);

    dispatch({type: FETCH_COINS, payload: res.data});
};