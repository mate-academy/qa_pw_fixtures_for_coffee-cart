import { test } from '../fixtures/fixtures';
import { prices } from '../../src/constants';
import { totalPriceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Check Espresso cost is added to Total on menu page', async ({ page, menuPage }) => {
  const espressoPrice = prices.Espresso;

  await menuPage.open();
  await menuPage.clickEspressoCup();

  await menuPage.assertTotalCheckoutContainsValue(totalPriceFormatStr(espressoPrice));
});
