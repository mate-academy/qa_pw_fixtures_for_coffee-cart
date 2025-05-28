import { test } from '../_fixtures/fixtures';
import { price } from '../../src/constants';

test('Assert cart updated correctly after clicking plus for drinks', async ({
  menuPage,
  cartPage,
  priceFormatter,
}) => {
  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  const espressoValue = priceFormatter.priceFormatStr(price.espresso);
  await cartPage.assertEspressoTotalCostContainsCorrectText(espressoValue);

  await cartPage.clickAddOneEspressoButton();

  await cartPage.assertEspressoTotalCostContainsCorrectText('$20.00');
  await cartPage.assertCappuccinoTotalCostContainsCorrectText('$19.00');

  await cartPage.clickAddOneCappuccinoButton();

  await cartPage.assertCappuccinoTotalCostContainsCorrectText('$38.00');
  await cartPage.assertEspressoTotalCostContainsCorrectText('20.00');

  await cartPage.assertTotalCheckoutContainsValue('$58.00');
});
