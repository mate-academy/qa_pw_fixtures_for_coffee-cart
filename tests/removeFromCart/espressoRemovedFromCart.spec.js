import { test } from '../fixtures/fixtures';
import { MenuPage } from '../../src/pages/MenuPage';
import { CartPage } from '../../src/pages/CartPage';

test('Check Espresso removed from Cart after clicking remove button', async ({
  page,menuPage, cartPage
}) => {

  await menuPage.open();
  await menuPage.clickEspressoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.clickRemoveAllEspressoButton();
  await cartPage.assertNoCoffeeMessageIsVisible();
});
