import { test } from '../fixtures/fixtures';
import { COFFEE_PRICES } from '../../src/constants';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Assert discounted Mocha added to the Cart after promo accepting', async ({
  menuPage,
  cartPage,
}) => {
  await menuPage.open();

  await menuPage.clickCappucinoCup();
  const cappuccinoUnitPrice = COFFEE_PRICES.cappuccino;

  await menuPage.clickEspressoCup();
  const espressoUnitPrice = COFFEE_PRICES.espresso;

  await menuPage.clickAmericanoCup();
  const americanoUnitPrice = COFFEE_PRICES.americano;

  const discountedMochaUnitPrice = COFFEE_PRICES.mocha / 2;

  await menuPage.assertPromoMessageIsVisible();

  await menuPage.clickYesPromoButton();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatStr(espressoUnitPrice),
  );
  await cartPage.assertDiscountedMochaTotalCostContainsCorrectText(
    priceFormatStr(discountedMochaUnitPrice),
  );
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    priceFormatStr(cappuccinoUnitPrice),
  );
  await cartPage.assertAmericanoTotalCostContainsCorrectText(
    priceFormatStr(americanoUnitPrice),
  );
});
