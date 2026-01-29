import { test } from '../fixtures/fixtures';
import { coffeePrices } from "../../src/constants";
import { priceFormatStr } from "../../src/common/helpers/getPriceForQuantity";

const espresso = coffeePrices.espresso;
const mocha = coffeePrices.mocha;
const cappuccino = coffeePrices.cappuccino;
const americano = coffeePrices.americano;

test('Assert discounted Mocha added to the Cart after promo accepting', async ({
  menuPage, cartPage
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
    priceFormatStr(espresso)
  );
  await cartPage.assertDiscountedMochaTotalCostContainsCorrectText(
    priceFormatStr(mocha)
  );
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    priceFormatStr(cappuccino)
  );
  await cartPage.assertAmericanoTotalCostContainsCorrectText(
    priceFormatStr(americano)
  );
});
