import {
  test,
  COFFEE_PRICES,
  totalPriceFormatStr,
} from '../_fixtures/fixtures';

test('Check Cappuccino cost is added to Total on menu page', async ({
  menuPage,
}) => {
  await menuPage.open();
  await menuPage.clickCappucinoCup();

  await menuPage.assertTotalCheckoutContainsValue(
    totalPriceFormatStr(COFFEE_PRICES.cappuccino),
  );
});
