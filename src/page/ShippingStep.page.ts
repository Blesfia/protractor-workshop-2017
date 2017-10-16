import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {

  private get proceedToCheckoutButton(): ElementFinder {
    return $('.cart_navigation > button');
  }

  private get termsCheckBox(): ElementFinder {
    return $('#cgv');
  }

  public async goToPaymentStepPage() {
    await this.termsCheckBox.click();
    return this.proceedToCheckoutButton.click();
  }
}
