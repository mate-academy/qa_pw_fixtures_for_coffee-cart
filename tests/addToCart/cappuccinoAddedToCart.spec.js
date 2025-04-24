import { test } from '../fixtures/fixtures';
import { priceFormatStr, unitPriceFormatStr } from '../../src/common/helpers/getPriceForQuantity';
import { coffeePrices } from '../../src/constants';

const cappuccinoUnitText = unitPriceFormatStr(coffeePrices.cappuccino, 1);

test('Check Cappuccino correctly added to the Cart', 
  async ({ 
    menuPage,
    cartPage
  }) => {
    await menuPage.open();
    await menuPage.clickCappucinoCup();

    await menuPage.clickCartLink();
    await cartPage.waitForLoading();

    await cartPage.assertCappuccinoNameIsContainsCorrectText();
    await cartPage.assertCappuccinoUnitContainsCorrectText(
      priceFormatStr(cappuccinoUnitText)
    );
    await cartPage.assertCappuccinoTotalCostContainsCorrectText(
      priceFormatStr(coffeePrices.cappuccino)
    );
});
