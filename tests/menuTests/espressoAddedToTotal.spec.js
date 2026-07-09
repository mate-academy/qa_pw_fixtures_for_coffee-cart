import { test, COFFEE_PRICES, totalPriceFormatStr } from '../fixtures/fixtures';

test('Check Espresso cost is added to Total on menu page', async ({
  menuPage,
}) => {
  await menuPage.open();
  await menuPage.clickEspressoCup();

  await menuPage.assertTotalCheckoutContainsValue(
    totalPriceFormatStr(COFFEE_PRICES.espresso * 1),
  );
});
