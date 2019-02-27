import axios from 'axios';
import _ from 'lodash';

import { getTrades } from './trades';

//Action Types

//Action Creators


//Reducer


//Selectors
export const getPositions = (state) => {
    const trades = getTrades(state);
    return _(trades.tradeList)
            .groupBy('symbol')
            .map((objs, key) => ({
                'symbol': key,
                'total_quantity': _.sumBy(objs, 'quantity') }))
            .value();
}