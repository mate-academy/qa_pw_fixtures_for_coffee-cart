import { test } from '../fixtures/fixtures';
import { coffeePrices } from "../../src/constants";
import { unitPriceFormatStr, priceFormatStr } from "../../src/common/helpers/getPriceForQuantity";

const espresso = coffeePrices.espresso;

test('Check Espresso correctly added to the Cart',
  async ({ menuPage, cartPage }) => {
    await menuPage.open();
    await menuPage.clickEspressoCup();

    await menuPage.clickCartLink();
    await cartPage.waitForLoading();

    await cartPage.assertEspressoNameIsContainsCorrectText();
    await cartPage.assertEspressoUnitContainsCorrectText(
      unitPriceFormatStr(espresso, 1)
    );
    await cartPage.assertEspressoTotalCostContainsCorrectText(
      priceFormatStr(espresso)
    );
  });