# Fixtures for CoffeeCart Tests

## Preparation

1. Open the forked repo in VSCode.
2. Create a new branch by running `git checkout -b task_solution`.
3. Run the installation commands: `npm ci` and `npx playwright install`.

## Task

1. Create `fixtures.ts` file under the `./tests/fixtures` folder.
2. Create fixtures for the page classes initialization:
    - `menuPage`
    - `cartPage`   
3. Create `constants.js` file under the `./src` folder. This file should export a constant object of coffee prices, for example, `{ espresso: 10, cappucino: 19}`.
4. Create the `getPriceForQuantity` helper method under the `src/common/helpers/getPriceForQuantity.ts` folder. This file should have three functions: 
    - `unitPriceFormatStr` — gets `unitPrice` and `unitsNumber` as input, returns a formatted price, for example, `10.00 x 1`
    - `priceFormatStr` — gets `unitPrice` as input, returns a formatted price, for example, `$10.00`
    - `totalPriceFormatStr` — gets `unitsNumber` as input, returns a formatted price, for example, `Total: $10.00`
5. Update all the tests to use corresponding fixtures for class initialization.
6. Update all the tests to use prices from constants and price formatting methods instead of hard-coded prices.  
7. Re-run all your tests and make sure they pass after the updates. 

## Task Reporting

1. Add and commit all your updates. 
2. Push the code to the origin.
3. Create PR for your changes. 
4. Fix all the suggestions from the code review until PR is approved.
