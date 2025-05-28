import { test } from '../_fixtures/fixtures';
import { price } from '../../src/constants';

test('Check Cappuccino cost is added to Total on menu page', async ({
  menuPage,
  priceFormatter,
}) => {
  await menuPage.open();
  await menuPage.clickCappucinoCup();

  const totalValue = priceFormatter.totalPriceFormatStr(price.cappucсino);
  await menuPage.assertTotalCheckoutContainsValue(totalValue);
});
