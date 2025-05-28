import { test } from '../_fixtures/fixtures';
import { price } from '../../src/constants';

test('Check Cappuccino cup has correct cost', async ({
  menuPage,
  priceFormatter,
}) => {
  await menuPage.open();

  const cappuccinoValue = priceFormatter.priceFormatStr(price.cappucсino);
  await menuPage.assertCappuccinoCupCostHasValue(cappuccinoValue);
});
