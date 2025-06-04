import { test } from '../fixtures/Fixturess';
import { coffeePrices } from '../../src/pages/constants';
import { totalPriceFormatStr } from '../../src/pages/common/helpers/getPriceForQuantity';

test('Check Espresso cost is added to Total on menu page', async ({ menuPage }) => {
  const espressoPrice = coffeePrices.espresso;
  const units = 1;

  const expectedTotalPriceText = totalPriceFormatStr(espressoPrice, units);

  await menuPage.open();
  await menuPage.clickEspressoCup();

  await menuPage.assertTotalCheckoutContainsValue(expectedTotalPriceText);
});
