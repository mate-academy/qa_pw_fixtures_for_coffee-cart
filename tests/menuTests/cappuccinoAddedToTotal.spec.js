import { test } from '../../tests/fixtures/fixtures';

test('Check Cappuccino cost is added to Total on menu page', async ({
  menuPage
}) => {
  await menuPage.open();
  await menuPage.clickCappucinoCup();

  await menuPage.assertTotalCheckoutContainsValue('Total: $19.00');
});
