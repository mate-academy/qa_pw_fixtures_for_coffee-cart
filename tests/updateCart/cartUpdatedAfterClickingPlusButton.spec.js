import { test } from "../fixtures/fixtures";
import { priceFormatStr, totalPriceFormatStr } from "../../src/common/helpers/getPriceForQuantity";
import { COFFEE_PRICE } from "../../src/constants";

test('Assert cart updated correctly after clicking plus for drinks', async ({
  menuPage,
  cartPage
}) => {
  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoTotalCostContainsCorrectText(priceFormatStr(COFFEE_PRICE.espresso));

  await cartPage.clickAddOneEspressoButton();

  await cartPage.assertEspressoTotalCostContainsCorrectText(totalPriceFormatStr(COFFEE_PRICE.espresso,2));
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(priceFormatStr(COFFEE_PRICE.cappuccino));

  await cartPage.clickAddOneCappuccinoButton();

  await cartPage.assertCappuccinoTotalCostContainsCorrectText(totalPriceFormatStr(COFFEE_PRICE.cappuccino, 2));
  await cartPage.assertEspressoTotalCostContainsCorrectText(totalPriceFormatStr(COFFEE_PRICE.espresso, 2));

  await cartPage.assertTotalCheckoutContainsValue(
    totalPriceFormatStr(
      parseFloat(totalPriceFormatStr(COFFEE_PRICE.cappuccino, 2).replace('$','')) +
      parseFloat(totalPriceFormatStr(COFFEE_PRICE.espresso, 2).replace('$',''))
    )
  );
});
