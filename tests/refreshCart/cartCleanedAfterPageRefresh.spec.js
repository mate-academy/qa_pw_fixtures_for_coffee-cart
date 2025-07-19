import { test } from '../_fixtures/fixtures';

test('Assert cart cleaned after page refresh', async ({
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

  await cartPage.assertCoffeeIsVisible(espressoName);
  await cartPage.assertCoffeeIsVisible(cappuccinoName);

  await cartPage.reload();

  await cartPage.assertCoffeeIsNotVisible(espressoName);
  await cartPage.assertCoffeeIsNotVisible(cappuccinoName);
});
