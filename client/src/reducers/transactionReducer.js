import { normalize } from 'normalizr';
import { transactionListSchema } from '../actions/schemas';

import { FETCH_TRANSACTIONS, REMOVE_TRADE } from '../actions/types';

export default function(state = null, action) {
    switch(action.type) {
        case FETCH_TRANSACTIONS:
            const normalizedData = normalize(action.payload, transactionListSchema);
            return {
                ...state,
                byId: normalizedData.entities.transactions,
                allIds: normalizedData.result
            };
        case REMOVE_TRADE:
            const removedIds = state.allIds.filter(id => {
                return id !== action.payload
              })
            delete state.byId[action.payload];
                 
            return {
                    allIds: removedIds,
                    byId: state.byId
            };
        default:
            return state;
    }
}