import { test } from '../_fixtures/fixtures';

test('Assert discounted Mocha added to the Cart after promo accepting', async ({
  menuPage,
  cartPage,
  coffeeCatalog,
  getFormattedPrice,
  parsePrice,
}) => {
  const cappuccinoKey = 'cappuccino';
  const cappuccinoName = coffeeCatalog[cappuccinoKey].name;

  const espressoKey = 'espresso';
  const espressoName = coffeeCatalog[espressoKey].name;

  const americanoKey = 'americano';
  const americanoName = coffeeCatalog[americanoKey].name;

  const discountedMochaKey = 'discountedMocha';
  const discountedMochaName = coffeeCatalog[discountedMochaKey].name;

  await menuPage.open();
  await menuPage.clickCoffeeCup(cappuccinoName);
  await menuPage.clickCoffeeCup(espressoName);
  await menuPage.clickCoffeeCup(americanoName);

  await menuPage.assertPromoMessageIsVisible();
  await menuPage.clickNoPromoButton();
  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  const cappuccinoOrder = await getFormattedPrice(cappuccinoKey, 1);
  const espressoOrder = await getFormattedPrice(espressoKey, 1);
  const americanoOrder = await getFormattedPrice(americanoKey, 1);

  await cartPage.assertCoffeeRowIsCorrect(cappuccinoName, cappuccinoOrder);
  await cartPage.assertCoffeeRowIsCorrect(espressoName, espressoOrder);
  await cartPage.assertCoffeeRowIsCorrect(americanoName, americanoOrder);
  await cartPage.assetCoffeeIsNotVisible(discountedMochaName);

  const expectedTotal =
    parsePrice(cappuccinoOrder.totalPriceFormatStr) +
    parsePrice(espressoOrder.totalPriceFormatStr) +
    parsePrice(americanoOrder.totalPriceFormatStr);

  await cartPage.assertCheckoutContainsText(expectedTotal);
});
