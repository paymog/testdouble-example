import { MongoDB } from './mongodb.js';

type TripType = {
  _id: string;
};

export const Trips = MongoDB.collection<TripType>('Trips');

