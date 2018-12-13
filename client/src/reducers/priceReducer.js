import { UPDATE_PRICES } from '../actions/types';

export default function(state = null, action) {
    switch(action.type) {
        case UPDATE_PRICES:
            return action.payload || false;
        default:
            return state;
    }
}