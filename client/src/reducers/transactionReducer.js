import { normalize } from 'normalizr';
import { transactionListSchema } from '../actions/schemas';

import { FETCH_TRANSACTIONS } from '../actions/types';

export default function(state = null, action) {
    switch(action.type) {
        case FETCH_TRANSACTIONS:
        const normalizedData = normalize(action.payload, transactionListSchema);
        return {
            ...state,
            transactionData: normalizedData.entities.transactions,
            transactionList: normalizedData.result
        };
        default:
            return state;
    }
}