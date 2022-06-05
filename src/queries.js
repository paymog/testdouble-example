import {checkIfUserCanSeeTrip,} from './validation.js';
import {Trips} from "./Trips.js";


export const tripQueries = {
    trips: async () => {
        if (!checkIfUserCanSeeTrip()) {
            throw new Error('Sorry, you are not allowed to view this trip');
        }
        return Trips.find().toArray();
    },
};
