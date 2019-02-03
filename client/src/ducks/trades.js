import axios from 'axios';
import { schema, normalize } from 'normalizr';


//Action Types
export const FETCH_TRADES_REQUEST = 'trades/fetch_trades_request';
export const FETCH_TRADES_SUCCESS = 'trades/fetch_trades_success';
export const FETCH_TRADES_FAILURE = 'trades/fetch_trades_failure';
export const SUBMIT_TRADE_REQUEST = 'trades/submit_trade_request';
export const NEW_TRADE_SUCCESS = 'trades/new_trade_success';
export const UPDATE_TRADE_SUCCESS = 'trades/update_trade_success';
export const SUBMIT_TRADE_FAILURE = 'trades/submit_trade_failure';
export const REMOVE_TRADE_REQUEST = 'trades/remove_trade_request';
export const REMOVE_TRADE_SUCCESS = 'trades/remove_trade_success';
export const REMOVE_TRADE_FAILURE = 'trades/remove_trade_failure';
export const UPDATE_ACTIVE_DETAILS = 'trades/update_active_details';
export const ENTER_NEW_DETAILS = 'trades/enter_new_details';


//Action Creators
export const fetchTransactions = () => async dispatch => {
    dispatch({ type: FETCH_TRADES_REQUEST });
    
    try {
        const res = await axios.get('/api/trades');
        
        dispatch({ type: FETCH_TRADES_SUCCESS, payload: res.data });
    } catch(err) {
        dispatch({ type: FETCH_TRADES_FAILURE});
    }
};

export const enterTradeDetails = (trade) => dispatch => {
    if (trade) {
        dispatch({ type: UPDATE_ACTIVE_DETAILS, payload: trade })
    } else {
        dispatch({ type: ENTER_NEW_DETAILS })
    }
};

export const submitTrade = (trade) => async dispatch => {
    dispatch({ type: SUBMIT_TRADE_REQUEST })

    let res;

    try {
        if(trade.id) { 
            res = await axios.put(`/api/trade/update/${trade.id}`, trade);
            dispatch({type: UPDATE_TRADE_SUCCESS, payload: res.data});
        } else {
            res = await axios.post('/api/trade/new', trade);
            dispatch({type: NEW_TRADE_SUCCESS, payload: res.data});
        }
    } catch(err) {
        dispatch({type: SUBMIT_TRADE_FAILURE});
    }
};

export const removeTrade = (id) => async dispatch => {
    dispatch({type: REMOVE_TRADE_REQUEST});

    try {
        await axios.delete(`/api/trade/delete/${id}`);

        dispatch({type: REMOVE_TRADE_SUCCESS, payload: id});
    } catch(err) {
        dispatch({type: REMOVE_TRADE_FAILURE});
    }
}


//Store Schema
const transactionSchema = new schema.Entity('transactions');
const transactionListSchema = [ transactionSchema ];


//Reducer
const initialState = {
    byId: {},
    allIds: [],
    activeTradeValues: {},
    isLoading: false
  };

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_TRADES_REQUEST:
        case SUBMIT_TRADE_REQUEST:
        case REMOVE_TRADE_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case FETCH_TRADES_SUCCESS:
            const normalizedData = normalize(action.payload, transactionListSchema);
            return {
                ...state,
                byId: normalizedData.entities.transactions,
                allIds: normalizedData.result,
                isLoading: false,
            };
        case UPDATE_TRADE_SUCCESS:
            const updatedIds = state.allIds.map(item => {
                if(item === action.payload.id) {
                    return action.payload.id;
                }
                return item;
            });
            return {
                ...state,
                allIds: updatedIds,
                byId: {
                    ...state.byId,
                    [action.payload.id]: {
                        ...action.payload
                    }
                },
                isLoading: false
            }
        case NEW_TRADE_SUCCESS:
            return {
                ...state,
                allIds: [ ...state.allIds, action.payload.id],
                byId: {
                    ...state.byId,
                    [action.payload.id]: action.payload
                },
                isLoading: false
            }
        case REMOVE_TRADE_SUCCESS:
            const removedIds = state.allIds.filter(id => {
                return id !== action.payload
              })
            delete state.byId[action.payload];
                 
            return {
                    ...state,
                    allIds: removedIds,
                    byId: state.byId,
                    isLoading: false
            };
        //need to account for errors in fetching trades, return error message
        case FETCH_TRADES_FAILURE:
        case SUBMIT_TRADE_FAILURE:
        case REMOVE_TRADE_FAILURE:
            return {
                ...state,
                isLoading: false,
            };
        case UPDATE_ACTIVE_DETAILS:
            return {
                ...state,
                activeTradeValues: {
                    id: action.payload._id,
                    symbol: action.payload.symbol,
                    coinName: action.payload.coinName,
                    type: action.payload.type,
                    quantity: action.payload.quantity,
                    price_amount: action.payload.price.amount,
                    price_currency: action.payload.price.currency,
                }
            }
        case ENTER_NEW_DETAILS:
            return {
                ...state,
                activeTradeValues: {},
            }
        default:
            return state;
    }
}