import { test } from '../fixtures/fixtures';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';
import { PRICES } from '../../src/constants';

test('Check Espresso cup has correct cost', async ({ menuPage }) => {
  await menuPage.open();

  const espressoCost = priceFormatStr(PRICES.espresso);
  await menuPage.assertEspressoCupCostHasValue(espressoCost);
});
