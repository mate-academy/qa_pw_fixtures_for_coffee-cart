import { test } from '../fixtures/fixtures';
import { CartPage } from '../../src/pages/CartPage';

test('Assert empty cart shows correct message', async ({ cartPage }) => {
  await cartPage.open();

  await cartPage.assertNoCoffeeMessageIsVisible();
});
