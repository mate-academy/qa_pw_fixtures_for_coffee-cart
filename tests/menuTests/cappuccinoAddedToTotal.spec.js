import { test } from '../_fixtures/fixtures';

test('Check Cappuccino cost is added to Total on menu page', async ({
  menuPage,
  coffeeCatalog,
  parsePrice,
  getFormattedPrice,
}) => {
  const coffeeKey = 'cappuccino';
  const coffeeName = coffeeCatalog[coffeeKey].name;

  await menuPage.open();
  await menuPage.clickCoffeeCup(coffeeName);

  const coffeeOrder = await getFormattedPrice(coffeeKey, 1);
  const expectedTotal = parsePrice(coffeeOrder.totalPriceFormatStr);
  await menuPage.assertTotalCheckoutContainsValue(expectedTotal);
});
