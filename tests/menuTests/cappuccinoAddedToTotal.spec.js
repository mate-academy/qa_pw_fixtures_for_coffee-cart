import { test } from '../fixtures/Fixturess';
import { coffeePrices } from '../../src/pages/constants';
import { totalPriceFormatStr } from '../../src/pages/common/helpers/getPriceForQuantity';

test('Check Cappuccino cost is added to Total on menu page', async ({ menuPage }) => {
  const cappuccinoPrice = coffeePrices.cappuccino;
  const units = 1;

  const expectedTotalPriceText = totalPriceFormatStr(cappuccinoPrice, units);

  await menuPage.open();
  await menuPage.clickCappucinoCup();

  await menuPage.assertTotalCheckoutContainsValue(expectedTotalPriceText);
});
