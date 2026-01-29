import { test } from '../fixtures/fixtures';
import { coffeePrices } from "../../src/constants";
import { priceFormatStr, totalPriceFormatStr } from "../../src/common/helpers/getPriceForQuantity";

const espresso = coffeePrices.espresso;
const cappuccino = coffeePrices.cappuccino;

test('Assert cart updated correctly after clicking plus for drinks', async ({
  menuPage, cartPage
}) => {
  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatStr(espresso)
  );

  await cartPage.clickAddOneEspressoButton();

  await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatStr(espresso * 2)
  );
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    priceFormatStr(cappuccino)
  );

  await cartPage.clickAddOneCappuccinoButton();

  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    priceFormatStr(cappuccino * 2)
  );
  await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatStr(espresso * 2)
  );

  await cartPage.assertTotalCheckoutContainsValue(
    totalPriceFormatStr(espresso * 2 + cappuccino * 2)
  );
});
