import {checkIfUserCanSeeTrip,} from './validation.js';
import {Trips} from "./Trips.js";


export const tripMutations = {
    createTrip: async () => {
        if (!checkIfUserCanSeeTrip()) {
            throw new Error('Sorry, you are not allowed to view this trip');
        }
        await Trips.insertOne({_id: "2"})
        return Trips.find().toArray();
    },
};
