import { test } from '../fixtures/fixtures';
import { COFFEE_PRICES } from '../../src/ui/constants/coffeePricesConstants';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Check Cappuccino cup has correct cost', async ({ menuPage }) => {
  await menuPage.open();

  await menuPage.assertCappuccinoCupCostHasValue(
    priceFormatStr(COFFEE_PRICES.cappuccino),
  );
});
