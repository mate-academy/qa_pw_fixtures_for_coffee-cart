import { test } from '../_fixtures/fixtures';

test('Assert cart updated correctly after clicking plus for drinks', async ({
  menuPage,
  cartPage,
}) => {
  await menuPage.open();
  await menuPage.clickCappucсinoCup();
  await menuPage.clickEspressoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoTotalCostContainsCorrectText('$10.00');

  await cartPage.clickAddOneEspressoButton();

  await cartPage.assertEspressoTotalCostContainsCorrectText('$20.00');
  await cartPage.assertCappuccinoTotalCostContainsCorrectText('$19.00');

  await cartPage.clickAddOneCappuccinoButton();

  await cartPage.assertCappuccinoTotalCostContainsCorrectText('$38.00');
  await cartPage.assertEspressoTotalCostContainsCorrectText('20.00');

  await cartPage.assertTotalCheckoutContainsValue('$58.00');
});
