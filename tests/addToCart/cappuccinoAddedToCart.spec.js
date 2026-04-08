import { test } from '../fixtures/fixtures';
import { coffeePrices } from '../../src/constants';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';
import { unitPriceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Check Cappuccino correctly added to the Cart', async ({
  menuPage,
  cartPage,
}) => {
  await menuPage.open();
  await menuPage.clickCappucinoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertCappuccinoNameIsContainsCorrectText();
  await cartPage.assertCappuccinoUnitContainsCorrectText(
    unitPriceFormatStr(coffeePrices.cappuccino, 1));
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    priceFormatStr(coffeePrices.cappuccino));
});
