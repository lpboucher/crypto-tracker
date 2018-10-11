import { FETCH_COINS } from '../actions/types';

export default function(state = null, action) {
    switch(action.type) {
        case FETCH_COINS:
            return action.payload || false;
        default:
            return state;
    }
}