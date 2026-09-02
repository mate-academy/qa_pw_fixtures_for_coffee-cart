import { test } from '../fixtures/fixtures';
import { COFFEE_PRICES } from '../../src/constants';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Check Espresso cup has correct cost', async ({ menuPage }) => {
  const espressoUnitPrice = COFFEE_PRICES.espresso;
  await menuPage.open();

  await menuPage.assertEspressoCupCostHasValue(
    priceFormatStr(espressoUnitPrice),
  );
});
