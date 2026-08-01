import { test } from '../fixtures/fixtures';
import { prices } from '../../src/constants';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Assert cart updated correctly after clicking plus for drinks', 
  async ({ menuPage, cartPage }) => {
  // const menuPage = new MenuPage(page);
  // const cartPage = new CartPage(page);

  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  // changed fixed prices to dynamic prices from constants file priceFormatStr

  await cartPage.assertEspressoTotalCostContainsCorrectText(priceFormatStr(prices.espresso));

  await cartPage.clickAddOneEspressoButton();

  await cartPage.assertEspressoTotalCostContainsCorrectText(priceFormatStr(prices.espresso * 2));
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(priceFormatStr(prices.cappuccino));

  await cartPage.clickAddOneCappuccinoButton();

  await cartPage.assertCappuccinoTotalCostContainsCorrectText(priceFormatStr(prices.cappuccino * 2));
  await cartPage.assertEspressoTotalCostContainsCorrectText(priceFormatStr(prices.espresso * 2));

  await cartPage.assertTotalCheckoutContainsValue(priceFormatStr(prices.espresso * 2 + prices.cappuccino * 2));
});
