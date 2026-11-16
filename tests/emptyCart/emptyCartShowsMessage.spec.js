import { test } from '../fixtures/fixtures';

test('Assert empty cart shows correct message', async ({ page, cartPage }) => {
  await cartPage.open();

  await cartPage.assertNoCoffeeMessageIsVisible();
});
