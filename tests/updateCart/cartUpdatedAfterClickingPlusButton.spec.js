import { test } from '../_fixtures/fixtures';
test('Assert cart updated correctly after clicking plus for drinks', async ({
  menuPage,
  cartPage,
  coffeeCatalog,
  parsePrice,
  getFormattedPrice,
}) => {
  const cappuccinoKey = 'cappuccino';
  const cappuccinoName = coffeeCatalog[cappuccinoKey].name;

  const espressoKey = 'espresso';
  const espressoName = coffeeCatalog[espressoKey].name;

  await menuPage.open();
  await menuPage.clickCoffeeCup(cappuccinoName);
  await menuPage.clickCoffeeCup(espressoName);

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  let espressoOrder = await getFormattedPrice(espressoKey, 1);
  await cartPage.assertCoffeeRowIsCorrect(espressoName, espressoOrder);
  await cartPage.clickAddOneCoffeeButton(espressoName);
  espressoOrder = await getFormattedPrice(espressoKey, 2);
  await cartPage.assertCoffeeRowIsCorrect(espressoName, espressoOrder);

  let cappuccinoOrder = await getFormattedPrice(cappuccinoKey, 1);
  await cartPage.assertCoffeeRowIsCorrect(cappuccinoName, cappuccinoOrder);
  await cartPage.clickAddOneCoffeeButton(cappuccinoName);
  cappuccinoOrder = await getFormattedPrice(cappuccinoKey, 2);
  await cartPage.assertCoffeeRowIsCorrect(cappuccinoName, cappuccinoOrder);

  const expectedTotal =
    parsePrice(cappuccinoOrder.totalPriceFormatStr) +
    parsePrice(espressoOrder.totalPriceFormatStr);
  await cartPage.assertCheckoutContainsText(expectedTotal);
});
