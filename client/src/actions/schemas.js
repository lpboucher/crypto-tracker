import { schema } from 'normalizr';

export const coinSchema = new schema.Entity('coins', undefined, {idAttribute: 'symbol'});
export const coinListSchema = [ coinSchema ];
export const transactionSchema = new schema.Entity('transactions', undefined, {idAttribute: 'symbol'});
export const transactionListSchema = [ transactionSchema ];