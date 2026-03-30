import { priceFormatStr, totalPriceFormatStr, unitPriceFormatStr } from '../common/helpers/getPriceForQuantity';

const { expect } = require('@playwright/test');

export class CartPage {
  constructor(page) {
    this.page = page; 
    this.cartListLocator = page.getByRole('list').nth(1);

    this.espressoItem = this.cartListLocator.getByRole('listitem').
    filter({ hasText: 'Espresso'});
    this.espressoName = this.espressoItem.locator('div').nth(0); 
    this.espressoUnit = this.espressoItem.locator('div').nth(1); 
    this.espressoTotalCost = this.espressoItem.locator('div').nth(3); 

    this.cappuccinoItem = this.cartListLocator.getByRole('listitem').
    filter({ hasText: 'Cappuccino'});
    this.cappuccinoName = this.cappuccinoItem.locator('div').nth(0); 
    this.cappuccinoUnit = this.cappuccinoItem.locator('div').nth(1); 
    this.cappuccinoTotalCost = this.cappuccinoItem.locator('div').nth(3); 

    this.discountedMochaItem = this.cartListLocator.getByRole('listitem').
    filter({ hasText: '(Discounted) Mocha'});
    this.discountedMochaName = this.discountedMochaItem.locator('div').nth(0); 
    this.discountedMochaUnit = this.discountedMochaItem.locator('div').nth(1); 
    this.discountedMochaTotalCost = this.discountedMochaItem.locator('div').
    nth(3);

    this.americanoItem = this.cartListLocator.getByRole('listitem').
    filter({ hasText: 'Americano'});
    this.americanoTotalCost = this.americanoItem.locator('div').nth(3); 

    this.removeAllEspressoButton = page.getByLabel('Remove all Espresso');
    this.removeAllCappuccinoButton = page.getByLabel('Remove all Cappuccino');

    this.removeOneEspressoButton = page.getByRole('button',
      { name: 'Remove one Espresso' });
    this.removeOneCappuccinoButton = page.getByRole('button',
      { name: 'Remove one Cappuccino' });

    this.addOneEspressoButton = page.getByRole('button',
      { name: 'Add one Espresso' });
    this.addOneCappuccinoButton = page.getByRole('button',
      { name: 'Add one Cappuccino' });

    this.notCoffeeMessage = page.getByText('No coffee, go add some.');
    this.totalCheckout = page.getByTestId('checkout');
  }

  async open() {
    await this.page.goto('https://coffee-cart.app/cart'); 
  }

  async waitForLoading() {
    await this.page.waitForURL('https://coffee-cart.app/cart');
  }

  async reload() {
    await this.page.reload();
  }

  async clickRemoveAllEspressoButton() {
    await this.removeAllEspressoButton.click();
  }

  async clickRemoveAllCappucinoButton() {
    await this.removeAllCappuccinoButton.click();
  }

  async clickRemoveOneEspressoButton() {
    await this.removeOneEspressoButton.click();
  }

  async clickRemoveOneCappuccinoButton() {
    await this.removeOneCappuccinoButton.click();
  }

  async clickAddOneEspressoButton() {
    await this.addOneEspressoButton.click();
  }

  async clickAddOneCappuccinoButton() {
    await this.addOneCappuccinoButton.click();
  }

  async assertEspressoItemIsVisible() {
    await expect(this.espressoItem).toBeVisible();
  }

  async assertEspressoItemIsHidden() {
    await expect(this.espressoItem).toBeHidden();
  }

  async assertEspressoNameIsContainsCorrectText() {
    await expect(this.espressoName).toContainText('Espresso'); 
  }

  async assertEspressoUnitContainsCorrectText(unitPrice, quantity) {
    const espressoUnit = unitPriceFormatStr(unitPrice, quantity)

    await expect(this.espressoUnit).toContainText(espressoUnit);
  }

  async assertEspressoTotalCostContainsCorrectText(totalPrice) {
    const espressoTotalCost = priceFormatStr(totalPrice)

    await expect(this.espressoTotalCost).toContainText(espressoTotalCost);
  }

  async assertCappuccinoItemIsVisible() {
    await expect(this.cappuccinoItem).toBeVisible();
  }

  async assertCappuccinoItemIsHidden() {
    await expect(this.cappuccinoItem).toBeHidden();
  }

  async assertCappuccinoNameIsContainsCorrectText() {
    await expect(this.cappuccinoName).toContainText('Cappuccino'); 
  }

  async assertCappuccinoUnitContainsCorrectText(unitPrice, quantity) {
    const cappuccinoUnit = unitPriceFormatStr(unitPrice, quantity)

    await expect(this.cappuccinoUnit).toContainText(cappuccinoUnit);
  }

  async assertCappuccinoTotalCostContainsCorrectText(totalPrice) {
    const cappuccinoTotalCost = priceFormatStr(totalPrice)

    await expect(this.cappuccinoTotalCost).toContainText(cappuccinoTotalCost);
  }

  async assertDiscountedMochaItemIsHidden() {
    await expect(this.discountedMochaItem).toBeHidden();
  }

  async assertDiscountedMochaTotalCostContainsCorrectText(text) {
    const discountedMochaTotalCost = priceFormatStr(text)

    await expect(this.discountedMochaTotalCost)
      .toContainText(discountedMochaTotalCost);
  }

  async assertAmericanoItemIsVisible() {
    await expect(this.americanoItem).toBeVisible();
  }

  async assertAmericanoTotalCostContainsCorrectText(text) {
    const americanoTotalCost = priceFormatStr(text)

    await expect(this.americanoTotalCost).toContainText(americanoTotalCost);
  }

  async assertNoCoffeeMessageIsVisible() {
    await expect(this.notCoffeeMessage).toBeVisible();
  }

  async assertTotalCheckoutContainsValue(value) {
    const totalCheckout = totalPriceFormatStr(value)

    await expect(this.totalCheckout).toContainText(totalCheckout);
  }
}