import { test } from '../fixtures/fixtures';
import { coffeePrices } from '../../src/constants';
import { priceFormatStr, unitPriceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Check Espresso correctly added to the Cart', async ({
  menuPage,
  cartPage
}) => {

  await menuPage.open();
  await menuPage.clickEspressoCup();
  
  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  const espressoPrice = coffeePrices.espresso;
  const espressoUnits = 1;

  await cartPage.assertEspressoNameIsContainsCorrectText();
  await cartPage.assertEspressoUnitContainsCorrectText(
    unitPriceFormatStr(espressoPrice, espressoUnits)
  );
  await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatStr(espressoPrice * espressoUnits)
  );
});