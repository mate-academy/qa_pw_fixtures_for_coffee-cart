import { test } from '../_fixtures/fixtures';

test('Check Espresso cup has correct cost', async ({ menuPage }) => {
  await menuPage.open();

  await menuPage.assertEspressoCupCostHasValue('$10.00');
});
