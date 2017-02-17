import { browser, element, by } from 'protractor';

export class CodewarsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cwa-root h1')).getText();
  }
}
