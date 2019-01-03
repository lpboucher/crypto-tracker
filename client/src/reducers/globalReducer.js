import { SUBMIT_TRADE_SUCCESS, OPEN_MODAL, CLOSE_MODAL } from '../actions/types';

const initialState = {
    isModalOpen: false
  };

export default function(state = initialState, action) {
    switch(action.type) {
        case SUBMIT_TRADE_SUCCESS:
            return { ...state, isModalOpen: false };
        case OPEN_MODAL:
            return { ...state, isModalOpen: true };
        case CLOSE_MODAL:
            return { ...state, isModalOpen: false };
        default:
            return state;
    }
}