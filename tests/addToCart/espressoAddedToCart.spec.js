import { test } from '../fixtures/fixtures';
import { priceFormatStr, unitPriceFormatStr } from '../../src/common/helpers/getPriceForQuantity';
import { coffeePrices } from '../../src/constants';

// eslint-disable-next-line max-len
test('Check Espresso correctly added to the Cart', async ({ menuPage, cartPage }) => {

  await menuPage.open();
  await menuPage.clickEspressoCup();
  
  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoNameIsContainsCorrectText();
  // eslint-disable-next-line max-len
  await cartPage.assertEspressoUnitContainsCorrectText(unitPriceFormatStr(coffeePrices.espresso, 1));
  // eslint-disable-next-line max-len
  await cartPage.assertEspressoTotalCostContainsCorrectText(priceFormatStr(coffeePrices.espresso));
});