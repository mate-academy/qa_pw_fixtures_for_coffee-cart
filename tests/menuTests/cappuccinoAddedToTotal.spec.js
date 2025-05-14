import { test } from '../_fixtures/fixtures';

test('Check Cappuccino cost is added to Total on menu page', async ({
  menuPage,
}) => {
  await menuPage.open();
  await menuPage.clickCappucсinoCup();

  await menuPage.assertTotalCheckoutContainsValue('Total: $19.00');
});
