import * as td from 'testdouble';
import {Trips} from './Trips.js';
import {expect} from 'chai'
import {tripMutations} from "./mutations.js";
import {MongoDB} from "./mongodb.js";

describe('trips', () => {
    let validationModule: any;
    let tripQueries: any;

    beforeEach(async () => {
        validationModule = await td.replaceEsm('./validation.js');
        tripQueries = (await import('./queries.js')).tripQueries;
    });
    afterEach(async () => {
        await MongoDB.dropDatabase()
    })

    it('can get trip', async () => {
        td.when(
            validationModule.checkIfUserCanSeeTrip(),
        ).thenReturn(
            true
        );
        await Trips.insertOne({_id: '1'});

        // we see that the item inserted immediately above is available
        const res1 = await Trips.find().toArray()
        expect(res1.length).to.eq(1)

        // but for some reason it's not available when queried through the `trips` function
        // if we comment out the `replaceEsm` in the beforeEach above (and the td.when), this problem disappears
        const res = await tripQueries.trips();
        expect(res.length).to.eq(1)

        td.verify(validationModule.checkIfUserCanSeeTrip());
    });

    it('can make trip', async () => {
        const res = await tripMutations.createTrip()
        expect(res.length).to.eq(1)

    })
});
