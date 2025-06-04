import { test } from '../fixtures/Fixturess';
import { coffeePrices } from '../../src/pages/constants';
import { priceFormatStr } from '../../src/pages/common/helpers/getPriceForQuantity';
import { mocha } from '../../src/pages/constants';

test('Assert discounted Mocha added to the Cart after promo accepting', async ({ cartPage, menuPage }) => {
  const cappuccinoPrice = coffeePrices.cappuccino;
  const espressoPrice = coffeePrices.espresso;
  const americanoPrice = coffeePrices.americano;
  const mochaDiscount = mocha.mochadiscount;
  const units = 1;

  const expectedEspressoPriceText = priceFormatStr(espressoPrice, units);
  const expectedCappuccinoPriceText = priceFormatStr(cappuccinoPrice, units);
  const expectedAmericanoPriceText = priceFormatStr(americanoPrice, units);

  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();
  await menuPage.clickAmericanoCup();

  await menuPage.assertPromoMessageIsVisible();

  await menuPage.clickYesPromoButton();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoTotalCostContainsCorrectText(expectedEspressoPriceText);
  await cartPage.assertDiscountedMochaTotalCostContainsCorrectText(mochaDiscount);
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(expectedCappuccinoPriceText);
  await cartPage.assertAmericanoTotalCostContainsCorrectText(expectedAmericanoPriceText);
});
