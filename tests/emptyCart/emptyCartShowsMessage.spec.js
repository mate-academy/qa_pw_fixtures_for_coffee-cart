import { test } from '../fixtures/fixtures.js';

test('Assert empty cart shows correct message', async ({ cartPage }) => {
  await cartPage.open();

  await cartPage.assertNoCoffeeMessageIsVisible();
});
