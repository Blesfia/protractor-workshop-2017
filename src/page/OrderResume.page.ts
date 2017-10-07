import { $, ElementFinder } from 'protractor';

export class OrderResumePage {

  private get messageOfAccomplish(): ElementFinder {
    return $('#center_column > div > p > strong');
  }

  public getMessageOfAccomplish() {
    return this.messageOfAccomplish.getText();
  }
}
