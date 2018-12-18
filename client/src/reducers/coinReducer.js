import { normalize } from 'normalizr';
import { coinListSchema } from '../actions/schemas';

import { FETCH_COINS } from '../actions/types';

export default function(state = null, action) {
    switch(action.type) {
        case FETCH_COINS:
            const normalizedData = normalize(action.payload.data, coinListSchema);
            return {
                ...state,
                bySymbol: normalizedData.entities.coins,
                allSymbols: normalizedData.result
            };

        default:
            return state;
    }
}