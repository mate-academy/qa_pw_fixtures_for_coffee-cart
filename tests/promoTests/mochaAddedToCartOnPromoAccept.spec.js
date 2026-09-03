import { test } from '../fixtures/fixtures';
import { COFFEE_PRICES } from '../../src/constants';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Assert discounted Mocha added to the Cart after promo accepting', async ({
  menuPage,
  cartPage,
}) => {
  const espressoUnitPrice = COFFEE_PRICES.espresso;
  const cappuccinoUnitPrice = COFFEE_PRICES.cappuccino;
  const mochaUnitPrice = COFFEE_PRICES.mocha / 2; // Assuming discount
  const americanoUnitPrice = COFFEE_PRICES.americano;
  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();
  await menuPage.clickAmericanoCup();

  await menuPage.assertPromoMessageIsVisible();

  await menuPage.clickYesPromoButton();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatStr(espressoUnitPrice),
  );
  await cartPage.assertDiscountedMochaTotalCostContainsCorrectText(
    priceFormatStr(mochaUnitPrice),
  );
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    priceFormatStr(cappuccinoUnitPrice),
  );
  await cartPage.assertAmericanoTotalCostContainsCorrectText(
    priceFormatStr(americanoUnitPrice),
  );
});
