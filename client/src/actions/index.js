import axios from 'axios';
import { FETCH_USER, FETCH_COINS } from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/auth/current_user');
    
    dispatch({type: FETCH_USER, payload: res.data});
};

export const fetchCoins = () => async dispatch => {
    const res = await axios.get('https://api.coinmarketcap.com/v2/ticker/?limit=10&structure=array');
    
    dispatch({type: FETCH_COINS, payload: res.data});
};