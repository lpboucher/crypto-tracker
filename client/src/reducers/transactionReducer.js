import { FETCH_TRANSACTIONS } from '../actions/types';

export default function(state = null, action) {
    switch(action.type) {
        case FETCH_TRANSACTIONS:
            return action.payload || false;
        default:
            return state;
    }
}