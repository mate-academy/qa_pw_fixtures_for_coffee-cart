import { priceFormatStr, unitPriceFormatStr } from '../../src/common/helpers/getPriceForQuantity';
import { COFFEE_PRICES } from '../../src/constants';
import { test } from '../fixtures/fixtures';

test('Check Espresso correctly added to the Cart', async ({menuPage, cartPage }) => {
  await menuPage.open();
  await menuPage.clickEspressoCup();
  
  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoNameIsContainsCorrectText();
  await cartPage.assertEspressoUnitContainsCorrectText(unitPriceFormatStr(COFFEE_PRICES.espresso, 1));
  await cartPage.assertEspressoTotalCostContainsCorrectText(priceFormatStr(COFFEE_PRICES.espresso));
});