import { test } from '../fixtures/fixtures';
import { totalPriceFormatStr } from '../../src/common/helpers/getPriceForQuantity';
import { coffeePrices } from '../../src/constants';

test('Check Cappuccino cost is added to Total on menu page', async ({
  menuPage,
}) => {
  await menuPage.open();
  await menuPage.clickCappucinoCup();

  // eslint-disable-next-line max-len
  await menuPage.assertTotalCheckoutContainsValue(totalPriceFormatStr(coffeePrices.cappucino));
});
