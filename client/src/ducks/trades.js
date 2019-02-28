import axios from 'axios';
import { reset } from 'redux-form';

import { getNumberOfItems, getTradeSortingKey } from './filters';

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

//Helper functions
const fetchPrices = async (ticker, date, current_currency, current_price) => {
    const baseUrl = 'https://api.coinpaprika.com/v1/tickers';

    const queryCurr = ['USD', 'BTC'].filter(currency => currency !== current_currency);

    const startDate = new Date(date);
    startDate.setDate(startDate.getDate() - 1);

    const priceData = await axios.get(`${baseUrl}/${ticker}/historical?quote=${queryCurr[0]}&start=${startDate.toISOString('T').slice(0,10)}&end=${date}&interval=24h`);

    return {
            [current_currency]: parseFloat(current_price),
            [queryCurr[0]]: parseFloat(priceData.data[0].price),
        }

        //NEED TO ALSO QUERY ETH PRICE AND PERFORM CONVERSION BASED ON QUERIED PRICES
}

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
    dispatch({ type: SUBMIT_TRADE_REQUEST });


    const marketPrices = await fetchPrices(trade.coinTickerCode, trade.date, trade.price_currency, trade.price_amount);

    const tradeData = {...trade, tradePrices: marketPrices};

    let res;

    try {
        if(trade.id) { 
            res = await axios.put(`/api/trade/update/${trade.id}`, tradeData);
            dispatch({type: UPDATE_TRADE_SUCCESS, payload: res.data});
        } else {
            res = await axios.post('/api/trade/new', tradeData);
            dispatch({type: NEW_TRADE_SUCCESS, payload: res.data});
        }
    } catch(err) {
        dispatch({type: SUBMIT_TRADE_FAILURE});
    }
    dispatch(reset('inputTradeForm'))
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

//Reducer
const initialState = {
    tradeList: [],
    activeTradeValues: {},
  };

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_TRADES_SUCCESS:
            return {
                ...state,
                tradeList: action.payload,
            };
        case UPDATE_TRADE_SUCCESS:
            const updatedIds = state.tradeList.map(item => {
                if(item.id === action.payload.id) {
                    return { ...item, ...action.payload }
                }
                return item;
            });
            return {
                ...state,
                tradeList: updatedIds
            }
        case NEW_TRADE_SUCCESS:
            return {
                ...state,
                tradeList: [ ...state.tradeList, action.payload],
            }
        case REMOVE_TRADE_SUCCESS:
            const removedTrades = state.tradeList.filter(trade => {
                return trade.id !== action.payload
              })
                 
            return {
                    ...state,
                    tradeList: removedTrades,
            };
        //need to account for errors in fetching trades, return error message
        case FETCH_TRADES_FAILURE:
        case SUBMIT_TRADE_FAILURE:
        case REMOVE_TRADE_FAILURE:
            return {
                ...state,
            };
        case UPDATE_ACTIVE_DETAILS:
            const{ _id, date, symbol, coinName, type, quantity, paid_in, prices} = action.payload;
            return {
                ...state,
                activeTradeValues: {
                    id: _id,
                    date: date.slice(0,10),
                    symbol,
                    coinName,
                    type,
                    quantity,
                    price_amount: prices[paid_in],
                    price_currency: paid_in,
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

//Selectors
export const getTrades = (state) => {
    return state.transactions;
}

export const getActiveTrade = (state) => {
    return state.transactions.activeTradeValues;
}

//Hard-coded to fetch by Id
export const getTradesById = (state) => {
    const trades = getTrades(state);
    return trades.tradeList.reduce((obj, item) => {
        obj[item.id] = item;
    return obj;
    }, {})
  }

export const getAllTradeIds = (state) => {
    const trades = getTrades(state);
    return trades.tradeList.map(trade => {
        return trade.id
    })
}

export const getAllTradeSymbols = (state) => {
    const trades = getTrades(state);
    return trades.tradeList.map(trade => {
        return trade.symbol
    })
}

//Do be deleted, work from ID hash
export const getTradesByKey = (state) => {
    const key = getTradeSortingKey(state);
    const trades = getTrades(state);
    return trades.tradeList.reduce((obj, item) => {
        obj[item[key]] = item;
    return obj;
    }, {})
  }

export const getSortedTradeListById = (state) => {
    const key = getTradeSortingKey(state);
    const trades = getTrades(state);
    const n = getNumberOfItems(state);
    return trades.tradeList.sort((trade1, trade2) => {
        return trade1[key] < trade2[key] ? -1 : 1;
    }).slice(0, n).map(trade => {
        return trade.id
    })
}
