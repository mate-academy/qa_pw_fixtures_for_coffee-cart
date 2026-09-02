import { test } from '../fixtures/fixtures';
import { COFFEE_PRICES } from '../../src/constants';
import { totalPriceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Check Espresso cost is added to Total on menu page', async ({
  menuPage,
}) => {
  const espressoUnitPrice = COFFEE_PRICES.espresso;
  const espressoTotalPrice = totalPriceFormatStr(espressoUnitPrice);

  await menuPage.open();
  await menuPage.clickEspressoCup();

  await menuPage.assertTotalCheckoutContainsValue(espressoTotalPrice);
});
