import { test } from '../fixtures/fixtures';
import { COFFEE_PRICES } from '../../src/constants/constants';

test('Check Cappuccino cost is added to Total on menu page',
  async ({ menuPage}) => {

  await menuPage.open();
  await menuPage.clickCappucinoCup();

  await menuPage.assertTotalCheckoutContainsValue(COFFEE_PRICES.cappuccino);
});
