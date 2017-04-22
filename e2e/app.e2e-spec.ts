import { WordpressPage } from './app.po';

describe('wordpress App', () => {
  let page: WordpressPage;

  beforeEach(() => {
    page = new WordpressPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
