import { test } from '../fixtures/fixtures';
import { prices } from '../../src/constants';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Check Espresso cup has correct cost', async ({ page, menuPage }) => {
  const espressoPrice = prices.Espresso;

  await menuPage.open();

  await menuPage.assertEspressoCupCostHasValue(priceFormatStr(espressoPrice));
});
