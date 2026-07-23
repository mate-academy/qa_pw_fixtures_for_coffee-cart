// import { test } from '@playwright/test';
// import { MenuPage } from '../../src/pages/MenuPage';
// import { CartPage }from '../../src/pages/CartPage';

// test('Check Espresso correctly added to the Cart', async ({ page }) => {
//   const menuPage = new MenuPage(page);
//   const cartPage = new CartPage(page);
      
import { test } from '../fixtures/fixtures';
import { coffeePrices } from '../../src/constants';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';
import { unitPriceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test ('Check Espresso added to the cart', async ({
  menuPage,
  cartPage,
}) => {
  await menuPage.open();
  await menuPage.clickEspressoCup();
  
  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoNameIsContainsCorrectText();
  //await cartPage.assertEspressoUnitContainsCorrectText('$10.00 x 1');
  await cartPage.assertEspressoUnitContainsCorrectText(
    unitPriceFormatStr(coffeePrices.espresso, 1)
  );
  //await cartPage.assertEspressoTotalCostContainsCorrectText('$10.00');
  await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatStr(coffeePrices.espresso)
  );
});