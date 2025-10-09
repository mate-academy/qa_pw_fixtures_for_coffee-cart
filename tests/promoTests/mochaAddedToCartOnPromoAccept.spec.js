import { test } from '../fixtures/fixtures';
import { MenuPage } from '../../src/pages/MenuPage';
import { CartPage } from '../../src/pages/CartPage';
import { coffeePrices } from '../../src/constants';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Assert discounted Mocha added to the Cart after promo accepting', async ({
  menuPage,
  cartPage
}) => {

  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();
  await menuPage.clickAmericanoCup();

  await menuPage.assertPromoMessageIsVisible();

  await menuPage.clickYesPromoButton();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  const espressoPrice = coffeePrices.espresso;
  const espressoUnits = 1;
  const mochaPrice = coffeePrices.mocha;
  const mochaUnits = 1;
  const cappuccinoPrice = coffeePrices.cappucino;
  const cappuccinoUnits = 1;
  const americanoPrice = coffeePrices.americano;
  const americanoUnits = 1;

  await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatStr(espressoPrice * espressoUnits)
  );
  await cartPage.assertDiscountedMochaTotalCostContainsCorrectText(
    priceFormatStr((mochaPrice / 2) * mochaUnits)
  );
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    priceFormatStr(cappuccinoPrice * cappuccinoUnits)
  );
  await cartPage.assertAmericanoTotalCostContainsCorrectText(
    priceFormatStr(americanoPrice * americanoUnits)
  );
});
