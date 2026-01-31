import { test } from '../fixtures/fixtures';
import { COFFEE_PRICES } from '../../src/constants';
import { totalPriceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Check Cappuccino cost is added to Total on menu page', async ({
  menuPage,
}) => {
  

  await menuPage.open();
  await menuPage.clickCappucinoCup();

  await menuPage.assertTotalCheckoutContainsValue(
  totalPriceFormatStr([{ unitPrice: COFFEE_PRICES.cappucino, unitsNumber: 1 }])
);
});
