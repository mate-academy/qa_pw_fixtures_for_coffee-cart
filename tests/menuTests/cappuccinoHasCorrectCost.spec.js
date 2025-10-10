import { test } from '../fixtures/fixtures';
import { coffeePrices } from '../../src/constants';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Check Cappuccino cup has correct cost', async ({
  menuPage
}) => {
  await menuPage.open();

  const cappuccinoPrice = coffeePrices.cappucino;

  await menuPage.assertCappuccinoCupCostHasValue(
    priceFormatStr(cappuccinoPrice)
  );
});
