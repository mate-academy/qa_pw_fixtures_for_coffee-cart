import { test } from '../fixtures/fixtures';
import { MenuPage } from '../../src/pages/MenuPage';
import { CartPage } from '../../src/pages/CartPage';
import { COFFEE_PRICES } from '../../src/constants';
import { unitPriceFormatStr, priceFormatStr, totalPriceFormatStr } from '../../src/common/helpers/getPriceForQuantity';


test('Check Cappuccino correctly added to the Cart', async ({ page, menuPage, cartPage }) => {
  

  await menuPage.open();
  await menuPage.clickCappucinoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertCappuccinoNameIsContainsCorrectText();
  await cartPage.assertCappuccinoUnitContainsCorrectText(unitPriceFormatStr(COFFEE_PRICES.CAPPUCCINO_PRICE, 1));
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(priceFormatStr(COFFEE_PRICES.CAPPUCCINO_PRICE));
});
