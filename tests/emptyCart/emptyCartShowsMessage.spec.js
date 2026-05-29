import { test } from '../../tests/fixtures/fixtures';

test('Assert empty cart shows correct message', async ({ cartPage }) => {
  await cartPage.open();

  await cartPage.assertNoCoffeeMessageIsVisible();
});
