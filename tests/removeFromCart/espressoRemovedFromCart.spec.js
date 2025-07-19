import { test } from '../_fixtures/fixtures';

test('Check Espresso removed from Cart after clicking remove button', async ({
  menuPage,
  cartPage,
  coffeeCatalog,
}) => {
  const coffeeKey = 'espresso';
  const coffeeName = coffeeCatalog[coffeeKey].name;

  await menuPage.open();
  await menuPage.clickCoffeeCup(coffeeName);

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertCoffeeIsVisible(coffeeName);
  await cartPage.clickRemoveAllCoffeeButton(coffeeName);
  await cartPage.assertNoCoffeeMessageIsVisible();
});
