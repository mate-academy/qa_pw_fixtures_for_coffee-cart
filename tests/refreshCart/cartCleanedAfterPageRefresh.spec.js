
import { test } from '../fixtures/fixtures';

test('Assert cart is cleaned after page refresh', async ({ menuPage, cartPage }) => {
  await menuPage.open();
  await menuPage.clickEspressoCup();
  await menuPage.clickCartLink();
  await cartPage.waitForLoading();
  await cartPage.reload();
  await cartPage.assertNoCoffeeMessageIsVisible();
});
