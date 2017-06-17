import { Angular2ElectronCiPage } from './app.po';

describe('angular2-electron-ci App', () => {
  let page: Angular2ElectronCiPage;

  beforeEach(() => {
    page = new Angular2ElectronCiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
