import axios from 'axios';
import _ from 'lodash';

import { getTrades, getAllTradeSymbols } from './trades';

//Action Types

//Action Creators


//Reducer


//Selectors
export const getPositions = (state) => {
    const trades = getTrades(state);
    return _(trades.tradeList)
            .groupBy("symbol")
            .mapValues(t => ({
                date: _.minBy(t, 'date').date,
                symbol: t[0].symbol,
                name: t[0].coinName,
                quantityHeld: _.sumBy(t, 'quantity'),
                totalCost: {
                    USD: _.sumBy(t, 'total_cost').USD,
                    BTC: _.sumBy(t, 'total_cost').BTC
                },
                paid_in: t[0].paid_in
              })).value();
}

//Need to get only unique symbols, not all
export const getPositionSymbols = (state) => {
    return getAllTradeSymbols(state);
}