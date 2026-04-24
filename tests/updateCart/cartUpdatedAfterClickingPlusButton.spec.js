import { test } from '../fixtures/fixtures';
import { priceObject } from '../../src/constants';
import { totalPriceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Assert cart updated correctly after clicking plus for drinks', async ({
    menuPage,
    cartPage
}) => {
    await menuPage.open();
    await menuPage.clickCappucinoCup();
    await menuPage.clickEspressoCup();

    await menuPage.clickCartLink();
    await cartPage.waitForLoading();

    await cartPage.assertEspressoTotalCostContainsCorrectText(totalPriceFormatStr(priceObject.Espresso));

    await cartPage.clickAddOneEspressoButton();

    await cartPage.assertEspressoTotalCostContainsCorrectText(totalPriceFormatStr(priceObject.Espresso, 2));
    await cartPage.assertCappuccinoTotalCostContainsCorrectText(totalPriceFormatStr(priceObject.Cappuccino));

    await cartPage.clickAddOneCappuccinoButton();

    await cartPage.assertCappuccinoTotalCostContainsCorrectText(totalPriceFormatStr(priceObject.Cappuccino, 2));
    await cartPage.assertEspressoTotalCostContainsCorrectText(totalPriceFormatStr(priceObject.Espresso, 2));

    await cartPage.assertTotalCheckoutContainsValue(totalPriceFormatStr(58));
});
