import { test } from '../fixtures/fixtures'
import { COFFEE_PRICES } from '../../src/constants';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Assert discounted Mocha added to the Cart after promo accepting', async ({
  menuPage, cartPage
}) => {
  let espressoCostText = priceFormatStr(COFFEE_PRICES.espresso);
  let discountedMochaText = priceFormatStr(COFFEE_PRICES.discountedMocha);
  let cappuccinoCostText = priceFormatStr(COFFEE_PRICES.cappuccino);
  let americanoCostText = priceFormatStr(COFFEE_PRICES.americano);

  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();
  await menuPage.clickAmericanoCup();

  await menuPage.assertPromoMessageIsVisible();

  await menuPage.clickYesPromoButton();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoTotalCostContainsCorrectText(espressoCostText);
  await cartPage.assertDiscountedMochaTotalCostContainsCorrectText(
    discountedMochaText);
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    cappuccinoCostText);
  await cartPage.assertAmericanoTotalCostContainsCorrectText(americanoCostText);
});
