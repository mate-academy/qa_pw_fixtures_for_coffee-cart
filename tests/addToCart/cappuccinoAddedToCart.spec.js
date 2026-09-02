import { priceFormatStr, unitPriceFormatStr } from '../../src/common/helpers/getPriceForQuantity';
import { COFFEE_PRICES } from '../../src/constants';
import { test } from '../fixtures/fixtures';

test('Check Cappuccino correctly added to the Cart', async ({menuPage,cartPage }) => {
  await menuPage.open();
  await menuPage.clickCappucinoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertCappuccinoNameIsContainsCorrectText();
  await cartPage.assertCappuccinoUnitContainsCorrectText(unitPriceFormatStr(COFFEE_PRICES.cappucino, 1));
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(priceFormatStr(COFFEE_PRICES.cappucino));
});
