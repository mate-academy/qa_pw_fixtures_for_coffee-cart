import { test } from '../fixtures/fixtures';
import { totalPriceFormatStr } from '../../src/common/helpers/getPriceForQuantity';
import { PRICES } from '../../src/constants';

test('Check Espresso cost is added to Total on menu page', async ({
  menuPage,
}) => {
  await menuPage.open();
  await menuPage.clickEspressoCup();

  const total = totalPriceFormatStr(PRICES.espresso, 1);
  await menuPage.assertTotalCheckoutContainsValue(total);
});
