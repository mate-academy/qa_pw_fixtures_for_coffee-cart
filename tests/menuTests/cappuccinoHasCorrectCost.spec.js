import { test } from '../fixtures/fixtures';
import { COFFEE_PRICES } from '../../src/constants';
import { unitPriceFormatStr, priceFormatStr, totalPriceFormatStr } from '../../src/common/helpers/getPriceForQuantity';


test('Check Cappuccino cup has correct cost', async ({ page, menuPage }) => {

  await menuPage.open();

  await menuPage.assertCappuccinoCupCostHasValue(priceFormatStr(COFFEE_PRICES.CAPPUCCINO_PRICE, 1));
});
