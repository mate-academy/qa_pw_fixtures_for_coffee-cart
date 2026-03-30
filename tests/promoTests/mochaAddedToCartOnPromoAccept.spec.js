import { test } from '../fixtures/fixtures';
import { COFFEE_PRICES } from '../../src/constants/constants';

test('Assert discounted Mocha added to the Cart after promo accepting',
  async ({ menuPage, cartPage
}) => {

  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();
  await menuPage.clickAmericanoCup();

  await menuPage.assertPromoMessageIsVisible();

  await menuPage.clickYesPromoButton();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoTotalCostContainsCorrectText(
    COFFEE_PRICES.espresso);
  await cartPage.assertDiscountedMochaTotalCostContainsCorrectText(
    COFFEE_PRICES.discountedMocha);
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    COFFEE_PRICES.cappuccino);
  await cartPage.assertAmericanoTotalCostContainsCorrectText(
    COFFEE_PRICES.americano);
});
