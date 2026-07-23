//import { test } from '@playwright/test';
//import { MenuPage } from '../../src/pages/MenuPage';

import { test } from '../fixtures/fixtures';
import { coffeePrices } from '../../src/constans';
import { totalPriceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Check Cappuccino cost is added to Total on menu page', async ({
  menuPage,
}) => {
  //const menuPage = new MenuPage(page);

  await menuPage.open();
  await menuPage.clickCappucinoCup();

  //await menuPage.assertTotalCheckoutContainsValue('Total: $19.00');
  await menuPage.assertTotalCheckoutContainsValue(
    totalPriceFormatStr(coffeePrices.cappuccino)
  );
});
