import { NgrouterthingPage } from './app.po';

describe('ngrouterthing App', () => {
  let page: NgrouterthingPage;

  beforeEach(() => {
    page = new NgrouterthingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
