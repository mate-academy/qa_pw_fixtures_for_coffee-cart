import { test } from '../fixtures/fixtures';
import {
    totalPriceFormatStr,
} from '../../src/common/helpers/getPriceForQuantity';
import { priceObject } from '../../src/constants';

test('Assert discounted Mocha added to the Cart after promo accepting', async ({
    menuPage,
    cartPage
}) => {
    await menuPage.open();
    await menuPage.clickCappucinoCup();
    await menuPage.clickEspressoCup();
    await menuPage.clickAmericanoCup();

    await menuPage.assertPromoMessageIsVisible();

    await menuPage.clickYesPromoButton();

    await menuPage.clickCartLink();
    await cartPage.waitForLoading();

    await cartPage.assertEspressoTotalCostContainsCorrectText(totalPriceFormatStr(priceObject.Espresso));
    await cartPage.assertDiscountedMochaTotalCostContainsCorrectText(totalPriceFormatStr(priceObject.Mocha));
    await cartPage.assertCappuccinoTotalCostContainsCorrectText(totalPriceFormatStr(priceObject.Cappuccino));
    await cartPage.assertAmericanoTotalCostContainsCorrectText(totalPriceFormatStr(priceObject.Americano));
});
