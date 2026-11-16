import { test } from '../fixtures/fixtures';
import { prices } from '../../src/constants';
import {
  unitPriceFormatStr, 
  priceFormatStr, 
  totalPrice, 
  totalPriceFormatStr 
} from '../../src/common/helpers/getPriceForQuantity';

test('Check Espresso correctly added to the Cart', async ({ page, cartPage, menuPage }) => { 
  const espressoPrice = prices.Espresso;

  await menuPage.open();
  await menuPage.clickEspressoCup();
  
  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoNameIsContainsCorrectText();
  await cartPage.assertEspressoUnitContainsCorrectText(unitPriceFormatStr(espressoPrice, 1));
  await cartPage.assertEspressoTotalCostContainsCorrectText(priceFormatStr(espressoPrice));
});