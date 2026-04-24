import { test } from '../fixtures/fixtures';
import {
    priceFormatStr,
    unitPriceFormatStr,
} from '../../src/common/helpers/getPriceForQuantity';
import { priceObject } from '../../src/constants';

test('Check Espresso correctly added to the Cart', async ({ menuPage, cartPage }) => {
      
  await menuPage.open();
  await menuPage.clickEspressoCup();
  
  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoNameIsContainsCorrectText();
  await cartPage.assertEspressoUnitContainsCorrectText(unitPriceFormatStr(priceObject.Espresso, 1));
  await cartPage.assertEspressoTotalCostContainsCorrectText(priceFormatStr(priceObject.Espresso));
});