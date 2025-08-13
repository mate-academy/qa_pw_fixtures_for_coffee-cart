import { test } from "../fixtures/fixtures";
import { priceFormatStr, unitPriceFormatStr } from "../../src/common/helpers/getPriceForQuantity";
import { COFFEE_PRICE } from "../../src/constants";

test('Check Espresso correctly added to the Cart', async ({ menuPage, cartPage }) => {      
  await menuPage.open();
  await menuPage.clickEspressoCup();
  
  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoNameIsContainsCorrectText();
  await cartPage.assertEspressoUnitContainsCorrectText(unitPriceFormatStr(COFFEE_PRICE.espresso, 1));
  await cartPage.assertEspressoTotalCostContainsCorrectText(priceFormatStr(COFFEE_PRICE.espresso));
});