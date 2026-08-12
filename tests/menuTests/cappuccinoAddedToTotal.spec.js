import { test } from '../fixtures/fixtures';
import { MenuPage } from '../../src/pages/MenuPage';
import { COFFEE_PRICES } from '../../src/constants';
import { unitPriceFormatStr, priceFormatStr, totalPriceFormatStr } from '../../src/common/helpers/getPriceForQuantity';


test('Check Cappuccino cost is added to Total on menu page', async ({
  page, menuPage
}) => {

  await menuPage.open();
  await menuPage.clickCappucinoCup();

  await menuPage.assertTotalCheckoutContainsValue(totalPriceFormatStr(COFFEE_PRICES.CAPPUCCINO_PRICE));
});
