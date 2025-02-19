# Practice task: Fixtures for CoffeeCart tests

## Preparation:
1. Open the forked repo in VSCode.
2. Create a new branch: git checkout -b added_article_test
3. Run the installation commands `npm ci` & `npx playwright install`.

## Main task:
1. Create `fixtures.ts` file under the `./tests/fixtures` folder.
2. Create fixtures for the page classes initialization:
- menuPage
- cartPage   
3. Create fixture `prices`:
-  It should return an object with all coffee names as keys and prices as values (numbers), i.e { espresso: 10, cappucino: 19}.
4. Create helper method `getPriceForQuantity` under `src/common/helpers/getPriceForQuantity.ts` folder. 
- This method should have two input parameters `priceForOne` and `quantity` and return the total Price for a coffe cups.
5. Update all the tests to use corresponiding fixtures for classes initialization.
6. Update all the tests to use `prices` fixture and method `getPriceForQuantity` instead of hard-coded prices.  
7. Re-run all your tests and make sure they pass after the updates. 

## Task Reporting: 
1. Add and commit all your updates. 
2. Push the code to the origin.
3. Create PR for your changes. 
4. Fix all the suggestions from the Code review until PR is approved.  

