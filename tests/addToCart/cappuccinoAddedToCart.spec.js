import { test } from '../fixtures/fixtures';
import { priceFormatStr, unitPriceFormatStr } from '../../src/common/helpers/getPriceForQuantity';
import { coffeePrices } from '../../src/constants';

// eslint-disable-next-line max-len
test('Check Cappuccino correctly added to the Cart', async ({ menuPage, cartPage }) => {

  await menuPage.open();
  await menuPage.clickCappucinoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertCappuccinoNameIsContainsCorrectText();
  // eslint-disable-next-line max-len
  await cartPage.assertCappuccinoUnitContainsCorrectText(unitPriceFormatStr(coffeePrices.cappuccino, 1));
  // eslint-disable-next-line max-len
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(priceFormatStr(coffeePrices.cappuccino));
});
