// // import { test } from '@playwright/test';
// import { MenuPage } from '../../src/pages/MenuPage';
// import { CartPage } from '../../src/pages/CartPage';

// test('Check Cappuccino correctly added to the Cart', async ({ page }) => {
//   const menuPage = new MenuPage(page);
//   const cartPage = new CartPage(page);
// 
import { test } from '../fixtures/fixtures';
import { coffeePrices } from '../../src/constants';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';
import { unitPriceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test ('Check Cappuchino added to the cart', async ({
  menuPage,
  cartPage,
}) => {
  await menuPage.open();
  await menuPage.clickCappucinoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertCappuccinoNameIsContainsCorrectText();
  //await cartPage.assertCappuccinoUnitContainsCorrectText('$19.00 x 1');
  await cartPage.assertCappuccinoUnitContainsCorrectText(
    unitPriceFormatStr(coffeePrices.cappuccino, 1)
  );
  //await cartPage.assertCappuccinoTotalCostContainsCorrectText('$19.00');
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    priceFormatStr(coffeePrices.cappuccino)
  );
});
