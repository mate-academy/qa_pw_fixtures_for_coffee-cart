import { test } from '../fixtures/fixtures.js';
import { COFFEE_PRICES } from '../../src/constants.js';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity.js';

test('Check Espresso cup has correct cost', async ({ menuPage }) => {
  await menuPage.open();

  await menuPage.assertEspressoCupCostHasValue(
    priceFormatStr(COFFEE_PRICES.espresso)
  );
});
