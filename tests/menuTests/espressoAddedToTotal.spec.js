import { test } from '../fixtures/fixtures';
import { COFFEE_PRICES } from '../../src/constants/constants';

test('Check Espresso cost is added to Total on menu page',
  async ({ menuPage }) => {
  await menuPage.open();
  await menuPage.clickEspressoCup();

  await menuPage.assertTotalCheckoutContainsValue(COFFEE_PRICES.espresso);
});
