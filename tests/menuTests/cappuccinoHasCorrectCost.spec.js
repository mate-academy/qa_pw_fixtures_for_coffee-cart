// import { test } from '@playwright/test';
// import { MenuPage } from '../../src/pages/MenuPage';

import { test } from '../fixtures/fixtures';
import { coffeePrices } from '../../src/constants';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Check Cappuccino cup has correct cost', async ({ menuPage }) => {
  //const menuPage = new MenuPage(page);

  await menuPage.open();

  //await menuPage.assertCappuccinoCupCostHasValue('$19.00');
  await menuPage.assertCappuccinoCupCostHasValue(
    priceFormatStr(coffeePrices.cappuccino)
  );
});
