import { test } from '../fixtures/fixtures';
import { coffeeTypes } from '../../src/constants';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Check Cappuccino cost is added to Total on menu page', async ({
  menuPage,
}) => {
  await menuPage.open();
  await menuPage.clickCappuccinoCup();

  await menuPage.assertTotalCheckoutContainsValue(
    priceFormatStr(coffeeTypes.cappuccino),
  );
});
