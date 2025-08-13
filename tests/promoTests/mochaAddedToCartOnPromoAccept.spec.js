import { test } from "../fixtures/fixtures";
import { priceFormatStr } from "../../src/common/helpers/getPriceForQuantity";
import { COFFEE_PRICE } from "../../src/constants";

test('Assert discounted Mocha added to the Cart after promo accepting', async ({
  menuPage,
  cartPage
}) => {
  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();
  await menuPage.clickAmericanoCup();

  await menuPage.assertPromoMessageIsVisible();

  await menuPage.clickYesPromoButton();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoTotalCostContainsCorrectText(priceFormatStr(COFFEE_PRICE.espresso));
  await cartPage.assertDiscountedMochaTotalCostContainsCorrectText(priceFormatStr(COFFEE_PRICE.mocha));
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(priceFormatStr(COFFEE_PRICE.cappuccino));
  await cartPage.assertAmericanoTotalCostContainsCorrectText(priceFormatStr(COFFEE_PRICE.americano));
});
