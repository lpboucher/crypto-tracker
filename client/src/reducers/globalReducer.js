import { SUBMIT_TRADE_SUCCESS, OPEN_DRAWER, CLOSE_DRAWER } from '../actions/types';

const initialState = {
    isDrawerOpen: false
  };

export default function(state = initialState, action) {
    switch(action.type) {
        case SUBMIT_TRADE_SUCCESS:
            return { ...state, isDrawerOpen: false };
        case OPEN_DRAWER:
            return { ...state, isDrawerOpen: true };
        case CLOSE_DRAWER:
            return { ...state, isDrawerOpen: false };
        default:
            return state;
    }
}