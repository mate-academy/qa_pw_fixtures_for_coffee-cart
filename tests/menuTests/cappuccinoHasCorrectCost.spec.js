import { test } from '../fixtures/fixtures'; 
import { COFFEE_PRICES } from '../../src/constants';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Check Cappuccino cup has correct cost', async ({ menuPage }) => {
  const cappuccinoPrice = COFFEE_PRICES.cappuccino;
  const expectedPrice = priceFormatStr(cappuccinoPrice);

  await menuPage.open();

  await menuPage.assertCappuccinoCupCostHasValue(expectedPrice);
});