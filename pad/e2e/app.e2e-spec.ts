import { PadPage } from './app.po';

describe('pad App', () => {
  let page: PadPage;

  beforeEach(() => {
    page = new PadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
