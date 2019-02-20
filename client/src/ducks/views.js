import { ENTER_NEW_DETAILS,
        SUBMIT_TRADE_REQUEST,
        NEW_TRADE_SUCCESS,
        UPDATE_TRADE_SUCCESS,
        UPDATE_ACTIVE_DETAILS,
        SUBMIT_TRADE_FAILURE,
        FETCH_TRADES_REQUEST,
        FETCH_TRADES_SUCCESS,
        FETCH_TRADES_FAILURE,
        REMOVE_TRADE_REQUEST,
        REMOVE_TRADE_SUCCESS,
        REMOVE_TRADE_FAILURE } from './trades';

import { FETCH_COINS_SUCCESS,
        FETCH_COINS_FAILURE,
        FETCH_COINS_REQUEST } from './coins'; 

//Action Types
export const OPEN_DRAWER = 'views/open_drawer';
export const CLOSE_DRAWER = 'views/close_drawer';


//Action Creators
export const openDrawer = () => dispatch => {
    dispatch({type: OPEN_DRAWER})
}

export const closeDrawer = () => dispatch => {
    dispatch({type: CLOSE_DRAWER})
}


//Reducer
const initialState = {
    isDrawerOpen: false,
    isLoading: false
  };

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_TRADES_REQUEST:
        case SUBMIT_TRADE_REQUEST:
        case REMOVE_TRADE_REQUEST:
        case FETCH_COINS_REQUEST:
            return { ...state, isLoading: true };
        case FETCH_TRADES_SUCCESS:
        case REMOVE_TRADE_SUCCESS:
        case FETCH_TRADES_FAILURE:
        case SUBMIT_TRADE_FAILURE:
        case REMOVE_TRADE_FAILURE:
        case FETCH_COINS_SUCCESS:
        case FETCH_COINS_FAILURE:
            return { ...state, isLoading: false };
        case ENTER_NEW_DETAILS:
        case UPDATE_ACTIVE_DETAILS:
        case OPEN_DRAWER:
            return { ...state, isDrawerOpen: true };
        case CLOSE_DRAWER:
            return { ...state, isDrawerOpen: false };
        case UPDATE_TRADE_SUCCESS:
        case NEW_TRADE_SUCCESS:
            return { ...state, isDrawerOpen: false, isLoading: false };
        default:
            return state;
    }
}

//Selectors
export const getLoader = (state) => {
    return state.isLoading;
  }