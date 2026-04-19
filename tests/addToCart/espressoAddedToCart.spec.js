import { test } from '../fixtures/fixtures';
import { ESSPRESSO_COST } from '../../src/constants';
import { priceFormatStr, unitPriceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Check Espresso correctly added to the Cart', async ({ 
  menuPage, cartPage
 }) => {
      
  await menuPage.open();
  await menuPage.clickEspressoCup();
  
  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoNameIsContainsCorrectText();
  await cartPage.assertEspressoUnitContainsCorrectText(
    unitPriceFormatStr(ESSPRESSO_COST, 1)
  );
  await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatStr(ESSPRESSO_COST)
  );
});