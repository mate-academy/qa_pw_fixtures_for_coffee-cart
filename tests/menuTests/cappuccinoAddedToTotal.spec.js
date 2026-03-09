import { test } from '../fixtures/fixtures';
import { coffeeUnitPrices } from '../../src/constants';
import { totalPriceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Check Cappuccino cost is added to Total on menu page', async ({
  menuPage
}) => {

  await menuPage.open();
  await menuPage.clickCappuccinoCup();

  await menuPage.assertTotalCheckoutContainsValue(
    totalPriceFormatStr(coffeeUnitPrices.cappuccino)
  );
});
