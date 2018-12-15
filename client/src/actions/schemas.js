import { schema } from 'normalizr';

export const coinSchema = new schema.Entity('coins');
export const coinListSchema = [ coinSchema ];