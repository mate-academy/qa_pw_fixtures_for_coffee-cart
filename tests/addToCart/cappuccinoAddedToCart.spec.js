import { test } from '../fixtures/fixtures';
import { COFFEE_PRICES } from '../../src/constants/constants';

test('Check Cappuccino correctly added to the Cart',
  async ({ menuPage, cartPage }) => {
  await menuPage.open();
  await menuPage.clickCappucinoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertCappuccinoNameIsContainsCorrectText();

  await cartPage.assertCappuccinoUnitContainsCorrectText(
    COFFEE_PRICES.cappuccino, 1);
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    COFFEE_PRICES.cappuccino);
});
