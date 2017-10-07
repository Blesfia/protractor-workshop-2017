import { $, ElementFinder, promise } from 'protractor';

export class BankPaymentPage {

  private get confirmMyOrderButton(): ElementFinder {
    return $('#cart_navigation > button > span');
  }

  public goToOrderResumePage(): promise.Promise<void> {
    return this.confirmMyOrderButton.click();
  }
}
