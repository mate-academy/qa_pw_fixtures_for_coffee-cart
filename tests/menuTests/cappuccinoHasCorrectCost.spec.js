import { test } from '../fixtures/Fixturess';
import { coffeePrices } from '../../src/pages/constants';
import { priceFormatStr } from '../../src/pages/common/helpers/getPriceForQuantity';

test('Check Cappuccino cup has correct cost', async ({ menuPage }) => {
  const cappuccinoPrice = coffeePrices.cappuccino;
  const units = 1;

  const expectedPriceText = priceFormatStr(cappuccinoPrice, units);

  await menuPage.open();

  await menuPage.assertCappuccinoCupCostHasValue(expectedPriceText);
});
