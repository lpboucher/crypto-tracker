import { normalize } from 'normalizr';
import * as schemas from '../actions/schemas';

import { FETCH_COINS } from '../actions/types';

export default function(state = null, action) {
    switch(action.type) {
        case FETCH_COINS:
            const data = normalize(action.payload.data, schemas.coinListSchema);
            console.log(data);
            return action.payload || false;
        default:
            return state;
    }
}