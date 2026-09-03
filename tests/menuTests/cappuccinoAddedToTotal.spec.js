import { test } from '../fixtures/fixtures';
import { COFFEE_PRICES } from '../../src/constants';
import { totalPriceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Check Cappuccino cost is added to Total on menu page', async ({
  menuPage,
}) => {
  const cappuccinoUnitPrice = COFFEE_PRICES.cappuccino;
  const cappuccinoTotalPrice = totalPriceFormatStr(cappuccinoUnitPrice);

  await menuPage.open();
  await menuPage.clickCappucinoCup();

  await menuPage.assertTotalCheckoutContainsValue(cappuccinoTotalPrice);
});
