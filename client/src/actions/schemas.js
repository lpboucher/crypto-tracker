import { schema } from 'normalizr';

export const coinSchema = new schema.Entity('coins');
export const coinListSchema = [ coinSchema ];
export const transactionSchema = new schema.Entity('transactions');
export const transactionListSchema = [ transactionSchema ];