import { test } from '../fixtures/fixtures';
import { COFFEE_PRICES } from '../../src/constants/constants';

test('Assert cart updated correctly after clicking plus for drinks',
  async ({ menuPage, cartPage }) => {
  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoTotalCostContainsCorrectText(
    COFFEE_PRICES.espresso);

  await cartPage.clickAddOneEspressoButton();

  await cartPage.assertEspressoTotalCostContainsCorrectText(
    COFFEE_PRICES.espresso * 2);
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    COFFEE_PRICES.cappuccino);

  await cartPage.clickAddOneCappuccinoButton();

  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    COFFEE_PRICES.cappuccino * 2);
  await cartPage.assertEspressoTotalCostContainsCorrectText(
    COFFEE_PRICES.espresso * 2);

  await cartPage.assertTotalCheckoutContainsValue(
    (COFFEE_PRICES.cappuccino * 2) + (COFFEE_PRICES.espresso * 2));
});
