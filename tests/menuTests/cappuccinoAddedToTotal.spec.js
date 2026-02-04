import { test } from '../fixtures/fixtures.js';
import { COFFEE_PRICES } from '../../src/constants.js';
import { totalPriceFormatStr } from '../../src/common/helpers/getPriceForQuantity.js';

test('Check Cappuccino cost is added to Total on menu page', async ({
  menuPage,
}) => {
  await menuPage.open();
  await menuPage.clickCappucinoCup();

  await menuPage.assertTotalCheckoutContainsValue(
    totalPriceFormatStr(COFFEE_PRICES.cappuccino)
  );
});
