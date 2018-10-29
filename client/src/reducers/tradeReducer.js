import { SUBMIT_TRADE } from '../actions/types';

export default function(state = null, action) {
    switch(action.type) {
        case SUBMIT_TRADE:
            return action.payload || false;
        default:
            return state;
    }
}