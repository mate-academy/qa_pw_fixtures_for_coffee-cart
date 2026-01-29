import { test } from '../fixtures/fixtures';
import { coffeePrices } from "../../src/constants";
import { getPriceForQuantity, priceFormatStr } from "../../src/common/helpers/getPriceForQuantity";

const cappuccino = coffeePrices.cappuccino;
test('Check Cappuccino correctly added to the Cart',
  async ({ menuPage, cartPage }) => {
    await menuPage.open();
    await menuPage.clickCappucinoCup();

    await menuPage.clickCartLink();
    await cartPage.waitForLoading();

    await cartPage.assertCappuccinoNameIsContainsCorrectText();
    await cartPage.assertCappuccinoUnitContainsCorrectText(
      getPriceForQuantity(cappuccino, 1)
    );
    await cartPage.assertCappuccinoTotalCostContainsCorrectText(
      priceFormatStr(cappuccino)
    );
  });
