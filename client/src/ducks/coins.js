import axios from 'axios';
import _ from 'lodash';

import { getNumberOfItems, getCoinSortingKey } from './filters';

//Action Types
export const FETCH_COINS_REQUEST = 'coins/fetch_coins_request';
export const FETCH_COINS_SUCCESS = 'coins/fetch_coins_success';
export const FETCH_COINS_FAILURE = 'coins/fetch_coins_failure';

//Action Creators
export const fetchCoins = () => async dispatch => {
    dispatch({ type: FETCH_COINS_REQUEST });

    const baseTickerUrl = 'https://api.coinpaprika.com/v1/tickers';
    const currencies = ['USD', 'BTC', 'ETH'];

    try {
        const res = await axios.get(`${baseTickerUrl}?quotes=${currencies.join()}`);

        const filteredRes = _.filter(res.data, function(o) { 
            return o.rank <= 100; 
        });
        
        dispatch({ type: FETCH_COINS_SUCCESS, payload: filteredRes });
    } catch(err) {
        dispatch({ type: FETCH_COINS_FAILURE});
    }
};

//Reducer
const initialState = {
    marketData: [],
  };

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_COINS_SUCCESS:
            return {
                ...state,
                marketData: action.payload,
            };

        default:
            return state;
    }
}

//Selectors
export const getCoins = (state) => {
    return state.coins;
  }

export const getCoinsBySymbol = (state) => {
    const key = 'symbol';
    const coins = getCoins(state);
    return coins.marketData.reduce((obj, item) => {
        obj[item[key]] = item;
     return obj;
   }, {})
}

export const getCoinsByKey = (state) => {
    const key = getCoinSortingKey(state);
    const coins = getCoins(state);
    return coins.marketData.reduce((obj, item) => {
        obj[item[key]] = item;
     return obj;
   }, {})
}

export const getCoinListBySymbol = (state) => {
    const key = 'symbol';
    const coins = getCoins(state);
    return coins.marketData.map(coin => {
        return coin[key]
    })
}

export const getCoinListByKey = (state) => {
    const key = getCoinSortingKey(state);
    const coins = getCoins(state);
    const n = getNumberOfItems(state);
    return coins.marketData.sort((coin1, coin2) => {
        return coin1[key] < coin2[key] ? -1 : 1;
    }).slice(0, n).map(coin => {
        return coin[key]
    })
}