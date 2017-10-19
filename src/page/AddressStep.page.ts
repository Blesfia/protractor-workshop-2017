import { $, ElementFinder, promise } from 'protractor';

export class AddressStepPage {
  private get proceedToCheckoutButton(): ElementFinder {
    return $('#center_column button[name=processAddress]');
  }

  public goToShippingStepPage(): promise.Promise<void> {
    return this.proceedToCheckoutButton.click();
  }
}
