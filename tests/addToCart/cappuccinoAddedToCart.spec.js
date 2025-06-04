import { test } from '../fixtures/Fixturess';
import { coffeePrices } from '../../src/pages/constants';
import { unitPriceFormatStr, priceFormatStr } from '../../src/pages/common/helpers/getPriceForQuantity';

test('Check Cappuccino correctly added to the Cart', async ({ cartPage, menuPage }) => {
  const cappuccinoPrice = coffeePrices.cappuccino;
  const units = 1;

  const expectedUnitText = unitPriceFormatStr(cappuccinoPrice, units);
  const expectedPriceText = priceFormatStr(cappuccinoPrice, units);

  await menuPage.open();
  await menuPage.clickCappucinoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertCappuccinoNameIsContainsCorrectText();
  await cartPage.assertCappuccinoUnitContainsCorrectText(expectedUnitText);
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(expectedPriceText);
});
