import { $, ElementFinder } from 'protractor';

export class OrderResumePage {
  private get accomplishLabel(): ElementFinder {
    return $('#center_column > div > p > strong');
  }

  public getMessageOfAccomplish() {
    return this.accomplishLabel.getText();
  }
}
