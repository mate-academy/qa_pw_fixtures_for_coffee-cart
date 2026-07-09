import { test, COFFEE_PRICES, priceFormatStr } from '../fixtures/fixtures';

test('Check Cappuccino cup has correct cost', async ({ menuPage }) => {
  await menuPage.open();

  await menuPage.assertCappuccinoCupCostHasValue(
    priceFormatStr(COFFEE_PRICES.cappuccino),
  );
});
