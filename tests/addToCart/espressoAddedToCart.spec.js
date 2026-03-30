import { test } from '../fixtures/fixtures';
import { COFFEE_PRICES } from '../../src/constants/constants';

test('Check Espresso correctly added to the Cart',
  async ({ menuPage, cartPage }) => {
  await menuPage.open();
  await menuPage.clickEspressoCup();
  
  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoNameIsContainsCorrectText();
  await cartPage.assertEspressoUnitContainsCorrectText(
    COFFEE_PRICES.espresso, 1);
  await cartPage.assertEspressoTotalCostContainsCorrectText(
    COFFEE_PRICES.espresso);
});
