import axios from 'axios';
import { schema, normalize } from 'normalizr';


//Action Types
export const FETCH_COINS = 'coins/fetch_coins';


//Action Creators
export const fetchCoins = () => async dispatch => {
    const res = await axios.get(`https://api.coinmarketcap.com/v2/ticker/?convert=EUR&structure=array`);
    //const prices = res.data.data.filter(cur => cur.symbol === "BTC" || cur.symbol === "ETH");
    
    dispatch({type: FETCH_COINS, payload: res.data});
    //dispatch({type: UPDATE_PRICES, payload: prices});
};


//Store Schema
export const coinSchema = new schema.Entity('coins', undefined, {idAttribute: 'symbol'});
export const coinListSchema = [ coinSchema ];

//Reducer
export default function reducer(state = null, action) {
    switch(action.type) {
        case FETCH_COINS:
            const normalizedData = normalize(action.payload.data, coinListSchema);
            return {
                ...state,
                bySymbol: normalizedData.entities.coins,
                allSymbols: normalizedData.result
            };

        default:
            return state;
    }
}