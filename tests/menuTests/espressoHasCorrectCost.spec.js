import { test } from '../_fixtures/fixtures';
test('Check Espresso cup has correct cost', async ({
  menuPage,
  coffeeCatalog,
  getFormattedPrice,
}) => {
  const coffeeKey = 'espresso';
  const coffeeName = coffeeCatalog[coffeeKey].name;

  await menuPage.open();

  const coffeeOrder = await getFormattedPrice(coffeeKey, 1);
  await menuPage.assertCoffeeCupCostHasValue(
    coffeeName,
    coffeeOrder.priceFormatStr,
  );
});
