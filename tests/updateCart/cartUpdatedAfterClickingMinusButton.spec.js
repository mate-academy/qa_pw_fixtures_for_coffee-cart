import { test } from '../_fixtures/fixtures';
test('Assert cart updated correctly after clicking minus for drinks', async ({
  menuPage,
  cartPage,
  coffeeCatalog,
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

  await cartPage.assetCoffeeIsVisible(espressoName);
  await cartPage.assetCoffeeIsVisible(cappuccinoName);

  await cartPage.clickRemoveOneCoffeeButton(espressoName);
  await cartPage.clickRemoveOneCoffeeButton(cappuccinoName);

  await cartPage.assetCoffeeIsNotVisible(espressoName);
  await cartPage.assetCoffeeIsNotVisible(cappuccinoName);
});
