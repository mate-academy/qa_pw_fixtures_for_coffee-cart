import { test } from '../fixtures/Fixturess';

test('Assert empty cart shows correct message', async ({ cartPage }) => {
  await cartPage.open();

  await cartPage.assertNoCoffeeMessageIsVisible();
});
