import { test } from '../_fixtures/fixtures';

test('Check Cappuccino correctly added to the Cart', async ({
  menuPage,
  cartPage,
  coffeeCatalog,
  getFormattedPrice,
  parsePrice,
}) => {
  const coffeeKey = 'cappuccino';
  const coffeeName = coffeeCatalog[coffeeKey].name;

  await menuPage.open();
  await menuPage.clickCoffeeCup(coffeeName);

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  const coffeeOrder = await getFormattedPrice(coffeeKey, 1);
  await cartPage.assertCoffeeRowIsCorrect(coffeeName, coffeeOrder);

  const expectedTotal = parsePrice(coffeeOrder.totalPriceFormatStr);
  await cartPage.assertCheckoutContainsText(expectedTotal);
});
