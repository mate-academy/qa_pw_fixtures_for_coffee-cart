// import { test } from '@playwright/test';
// import { MenuPage } from '../../src/pages/MenuPage';

import { test } from '../fixtures/fixtures';
import { coffeePrices } from '../../src/constans';
import { totalPriceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Check Espresso cost is added to Total on menu page', async ({ 
  menuPage }) => {
  //const menuPage = new MenuPage(page);

  await menuPage.open();
  await menuPage.clickEspressoCup();

  //await menuPage.assertTotalCheckoutContainsValue('Total: $10.00');
  await menuPage.assertTotalCheckoutContainsValue(
    totalPriceFormatStr(coffeePrices.espresso)
  );
});
