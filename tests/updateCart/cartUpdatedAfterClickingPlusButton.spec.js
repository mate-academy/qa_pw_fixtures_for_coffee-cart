import { test } from "../fixtures/fixtures";
import { MenuPage } from '../../src/pages/MenuPage';
import { CartPage } from '../../src/pages/CartPage';
import { priceFormatStr, totalPriceFormatStr, unitPriceFormatStr } from "../../src/common/helpers/getPriceForQuantity";
import { coffeePrices } from "../../src/constants";

test('Assert cart updated correctly after clicking plus for drinks', async ({
  menuPage,
  cartPage
}) => {
  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoTotalCostContainsCorrectText(priceFormatStr(coffeePrices.espresso));

  await cartPage.clickAddOneEspressoButton();

  await cartPage.assertEspressoTotalCostContainsCorrectText(priceFormatStr(coffeePrices.espresso * 2));
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(priceFormatStr(coffeePrices.cappuccino));

  await cartPage.clickAddOneCappuccinoButton();

  await cartPage.assertCappuccinoTotalCostContainsCorrectText(priceFormatStr(coffeePrices.cappuccino * 2));
  await cartPage.assertEspressoTotalCostContainsCorrectText(priceFormatStr(coffeePrices.espresso * 2));

  const totalCost = coffeePrices.espresso * 2 + coffeePrices.cappuccino * 2;
  await cartPage.assertTotalCheckoutContainsValue(totalPriceFormatStr(totalCost));
});
