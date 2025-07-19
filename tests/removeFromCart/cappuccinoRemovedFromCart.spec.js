import { test } from '../_fixtures/fixtures';

test('Check Cappuccino removed from Cart after clicking remove button', async ({
  menuPage,
  cartPage,
  coffeeCatalog,
}) => {
  const coffeeKey = 'cappuccino';
  const coffeeName = coffeeCatalog[coffeeKey].name;

  await menuPage.open();
  await menuPage.clickCoffeeCup(coffeeName);

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assetCoffeeIsVisible(coffeeName);
  await cartPage.clickRemoveAllCoffeeButton(coffeeName);
  await cartPage.assertNoCoffeeMessageIsVisible();
});
