import { test } from '../fixtures/Fixturess';
import { coffeePrices } from '../../src/pages/constants';
import { priceFormatStr } from '../../src/pages/common/helpers/getPriceForQuantity';

test('Check Espresso cup has correct cost', async ({ menuPage }) => {
  const espressoPrice = coffeePrices.espresso;
  const units = 1;

  const expectedPriceText = priceFormatStr(espressoPrice, units);

  await menuPage.open();

  await menuPage.assertEspressoCupCostHasValue(expectedPriceText);
});
