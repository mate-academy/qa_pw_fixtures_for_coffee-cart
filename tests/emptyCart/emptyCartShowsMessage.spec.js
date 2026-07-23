//import { test } from '@playwright/test';
//import { CartPage } from '../../src/pages/CartPage';
import { test } from '../fixtures/fixtures';

test('Assert empty cart shows correct message', async ({ cartPage }) => {
  //const cartPage = new CartPage(page);
  await cartPage.open();

  await cartPage.assertNoCoffeeMessageIsVisible();
});
