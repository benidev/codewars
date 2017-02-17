import { CodewarsPage } from './app.po';

describe('codewars App', function() {
  let page: CodewarsPage;

  beforeEach(() => {
    page = new CodewarsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('cwa works!');
  });
});
