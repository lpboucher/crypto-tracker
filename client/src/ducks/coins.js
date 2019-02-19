import axios from 'axios';
import _ from 'lodash';
import { schema, normalize } from 'normalizr';


//Action Types
export const FETCH_COINS = 'coins/fetch_coins';


//Action Creators
export const fetchCoins = () => async dispatch => {
    const baseTickerUrl = 'https://api.coinpaprika.com/v1/tickers';
    const currencies = ['USD', 'BTC', 'ETH'];
    const res = await axios.get(`${baseTickerUrl}?quotes=${currencies.join()}`);
    
    const filteredRes = _.filter(res.data, function(o) { 
        return o.rank <= 100; 
    });
    
    dispatch({type: FETCH_COINS, payload: filteredRes});
};

//Reducer
const initialState = {
    marketData: [],
    bySymbol: {},
    allSymbols: [],
    byRank: {},
    allRanks: [],
  };

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_COINS:
            const normalizedSymbols = normalize(action.payload, coinListSymbolSchema);
            const normalizedRanks = normalize(action.payload, coinListRankSchema);
            return {
                ...state,
                marketData: action.payload,
                bySymbol: normalizedSymbols.entities.symbols,
                allSymbols: normalizedSymbols.result,
                byRank: normalizedRanks.entities.ranks,
                allRanks: _.sortBy(normalizedRanks.result),
            };

        default:
            return state;
    }
}

//Store Schema
export const coinSymbolSchema = new schema.Entity('symbols', undefined, {idAttribute: 'symbol'});
export const coinListSymbolSchema = [ coinSymbolSchema ];
export const coinRankSchema = new schema.Entity('ranks', undefined, {idAttribute: 'rank'});
export const coinListRankSchema = [ coinRankSchema ];

//Selectors
export const getCoins = (state) => {
    return state.coins;
  }

export const getCoinsBySymbol = (state) => {
    const coins = getCoins(state);
    return coins.marketData.reduce((obj, item) => {
        obj[item.symbol] = item;
     return obj;
   }, {})
}

export const getAllCoinSymbols = (state) => {
    const coins = getCoins(state);
    return coins.marketData.map(coin => {
        return coin.symbol
    })
}

export const getCoinsByRank = (state) => {
    const coins = getCoins(state);
    return coins.marketData.reduce((obj, item) => {
        obj[item.rank] = item;
     return obj;
   }, {})
}

export const getAllCoinRanks = (state) => {
    const coins = getCoins(state);
    return coins.marketData.map(coin => {
        return coin.rank
    })
}