import { test, COFFEE_PRICES, priceFormatStr } from '../fixtures/fixtures';

test('Check Espresso cup has correct cost', async ({ menuPage }) => {
  await menuPage.open();

  await menuPage.assertEspressoCupCostHasValue(
    priceFormatStr(COFFEE_PRICES.espresso),
  );
});
