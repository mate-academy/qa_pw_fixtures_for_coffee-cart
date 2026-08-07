import { test } from '../fixtures/fixtures';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

import { PRICES } from '../../src/constants';

test('Check Cappuccino cup has correct cost', async ({ menuPage }) => {
  await menuPage.open();
  const cappuccinoCost = priceFormatStr(PRICES.cappuccino);
  await menuPage.assertCappuccinoCupCostHasValue(cappuccinoCost);
});
