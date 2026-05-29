import { test } from '../../tests/fixtures/fixtures';

test('Check Cappuccino cup has correct cost', async ({ menuPage }) => {
  await menuPage.open();

  await menuPage.assertCappuccinoCupCostHasValue('$19.00');
});
