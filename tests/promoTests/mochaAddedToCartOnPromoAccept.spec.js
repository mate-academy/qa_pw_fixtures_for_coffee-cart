import { test } from '../_fixtures/fixtures';

test('Assert discounted Mocha added to the Cart after promo accepting', async ({
  menuPage,
  cartPage,
}) => {
  await menuPage.open();
  await menuPage.clickCappucсinoCup();
  await menuPage.clickEspressoCup();
  await menuPage.clickAmericanoCup();

  await menuPage.assertPromoMessageIsVisible();

  await menuPage.clickYesPromoButton();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoTotalCostContainsCorrectText('$10.00');
  await cartPage.assertDiscountedMochaTotalCostContainsCorrectText('$4.00');
  await cartPage.assertCappuccinoTotalCostContainsCorrectText('$19.00');
  await cartPage.assertAmericanoTotalCostContainsCorrectText('$7.00');
});
