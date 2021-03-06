import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private get proceedToCheckoutButton(): ElementFinder {
    return $('[name="processCarrier"]');
  }

  private get termsCheckBox(): ElementFinder {
    return $('#cgv');
  }

  public async goToPaymentStepPage(): Promise<void> {
    await this.termsCheckBox.click();
    return this.proceedToCheckoutButton.click();
  }
}
