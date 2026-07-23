// import { test } from '@playwright/test';
// import { MenuPage } from '../../src/pages/MenuPage';
import { test } from '../fixtures/fixtures';
import { coffeePrices } from '../../src/constans';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Check Espresso cup has correct cost', async ({ menuPage }) => {
  //const menuPage = new MenuPage(page);

  await menuPage.open();

  //await menuPage.assertEspressoCupCostHasValue('$10.00');
  await menuPage.assertEspressoCupCostHasValue(
    priceFormatStr(coffeePrices.espresso)
  );
});
