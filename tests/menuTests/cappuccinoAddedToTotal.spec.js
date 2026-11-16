import { test } from '../fixtures/fixtures';
import { prices } from '../../src/constants';
import { totalPriceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Check Cappuccino cost is added to Total on menu page', async ({
  page,
  menuPage
}) => {
  
  const cappuccinoPrice = prices.Cappuccino;
  await menuPage.open();
  await menuPage.clickCappucinoCup();

  await menuPage.assertTotalCheckoutContainsValue(totalPriceFormatStr(cappuccinoPrice));
});
