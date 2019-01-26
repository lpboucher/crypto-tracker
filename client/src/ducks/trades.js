import axios from 'axios';
import { schema, normalize } from 'normalizr';


//Action Types
export const FETCH_TRADES = 'trades/fetch_trades';
export const SUBMIT_TRADE_SUCCESS = 'trades/submit_trade_success';
export const REMOVE_TRADE = 'trades/remove_trade';


//Action Creators
export const fetchTransactions = () => async dispatch => {
    const res = await axios.get('/api/trades');

    dispatch({type: FETCH_TRADES, payload: res.data});
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

export const removeTrade = (id) => async dispatch => {
    const res = await axios.delete(`/api/trade/delete/${id}`);
    
    dispatch({type: REMOVE_TRADE, payload: id});
}


//Store Schema
const transactionSchema = new schema.Entity('transactions');
const transactionListSchema = [ transactionSchema ];


//Reducer
export default function reducer(state = null, action) {
    switch(action.type) {
        case FETCH_TRADES:
            const normalizedData = normalize(action.payload, transactionListSchema);
            return {
                ...state,
                byId: normalizedData.entities.transactions,
                allIds: normalizedData.result
            };
        case REMOVE_TRADE:
            const removedIds = state.allIds.filter(id => {
                return id !== action.payload
              })
            delete state.byId[action.payload];
                 
            return {
                    allIds: removedIds,
                    byId: state.byId
            };
        default:
            return state;
    }
}