import { test } from '../fixtures/fixtures';
import { prices } from '../../src/constants';
import { unitPriceFormatStr, priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';


test('Check Cappuccino correctly added to the Cart', 
  async ({  menuPage, cartPage}) => {
 // const menuPage = new MenuPage(page);
 // const cartPage = new CartPage(page);

  await menuPage.open();
  await menuPage.clickCappucinoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertCappuccinoNameIsContainsCorrectText();
  await cartPage.assertCappuccinoUnitContainsCorrectText(
    unitPriceFormatStr(prices.cappuccino, 1));
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    priceFormatStr(prices.cappuccino));
});
