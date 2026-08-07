import { test } from '../fixtures/fixtures';
import { totalPriceFormatStr } from '../../src/common/helpers/getPriceForQuantity';
import { PRICES } from '../../src/constants';

test('Check Cappuccino cost is added to Total on menu page', async ({
  menuPage,
}) => {
  await menuPage.open();
  await menuPage.clickCappucinoCup();

  const total = totalPriceFormatStr(PRICES.cappuccino, 1);
  await menuPage.assertTotalCheckoutContainsValue(total);
});
