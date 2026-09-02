import { test } from '../fixtures/fixtures';
import { COFFEE_PRICES } from '../../src/constants';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Check Cappuccino cup has correct cost', async ({ menuPage }) => {
  const cappuccinoUnitPrice = COFFEE_PRICES.cappuccino;
  await menuPage.open();

  await menuPage.assertCappuccinoCupCostHasValue(
    priceFormatStr(cappuccinoUnitPrice),
  );
});
