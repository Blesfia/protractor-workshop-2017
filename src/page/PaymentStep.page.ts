import { $, ElementFinder, promise } from 'protractor';

export class PaymentStepPage {

  private get payByBankWireButton(): ElementFinder {
    return $('#HOOK_PAYMENT .bankwire');
  }

  public goToCheckPaymentStepPage(): promise.Promise<void> {
    return this.payByBankWireButton.click();
  }
}
