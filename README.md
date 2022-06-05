Tests fail when `replaceEsm` is used. To run tests:

```
npm install
npm run test
```

Then, comment out `replaceEsm` in `trips.test.ts` and also comment out the calls to `td.when` and `td.verify`. 
Run tests and see that they pass this time.

It seems that `replaceEsm` is somehow breaking the usage of mongo but only in dynamically imported tests.

Note that the test for reading trips fails but the test for creating a trip succeeds. 