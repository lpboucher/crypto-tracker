import axios from 'axios';
import _ from 'lodash';
import { schema, normalize } from 'normalizr';


//Action Types
export const FETCH_COINS = 'coins/fetch_coins';


//Action Creators
export const fetchCoins = () => async dispatch => {
    const baseUrl = 'https://api.coinpaprika.com/v1/tickers';
    const currencies = ['USD', 'BTC', 'ETH'];
    const res = await axios.get(`${baseUrl}?quotes=${currencies.join()}`);
    
    dispatch({type: FETCH_COINS, payload: res.data});
};


//Store Schema
export const coinSymbolSchema = new schema.Entity('symbols', undefined, {idAttribute: 'id'});
export const coinListSymbolSchema = [ coinSymbolSchema ];
export const coinRankSchema = new schema.Entity('ranks', undefined, {idAttribute: 'rank'});
export const coinListRankSchema = [ coinRankSchema ];


//Reducer
export default function reducer(state = null, action) {
    switch(action.type) {
        case FETCH_COINS:
            console.log(action.payload);
            const normalizedSymbols = normalize(action.payload, coinListSymbolSchema);
            const normalizedRanks = normalize(action.payload, coinListRankSchema);
            return {
                ...state,
                bySymbol: normalizedSymbols.entities.symbols,
                allSymbols: normalizedSymbols.result,
                byRank: normalizedRanks.entities.ranks,
                allRanks: _.sortBy(normalizedRanks.result),
            };

        default:
            return state;
    }
}