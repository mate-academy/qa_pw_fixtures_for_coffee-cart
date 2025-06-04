import { test } from '../fixtures/Fixturess';
import { coffeePrices } from '../../src/pages/constants';
import { unitPriceFormatStr, priceFormatStr } from '../../src/pages/common/helpers/getPriceForQuantity';

test('Check Espresso correctly added to the Cart', async ({ cartPage, menuPage }) => {
  const espressoPrice = coffeePrices.espresso;
  const units = 1;

  const expectedUnitText = unitPriceFormatStr(espressoPrice, units);
  const expectedPriceText = priceFormatStr(espressoPrice, units);

  await menuPage.open();
  await menuPage.clickEspressoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoNameIsContainsCorrectText();
  await cartPage.assertEspressoUnitContainsCorrectText(expectedUnitText);
  await cartPage.assertEspressoTotalCostContainsCorrectText(expectedPriceText);
});
