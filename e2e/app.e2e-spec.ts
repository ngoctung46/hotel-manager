import { HoanglongManagerPage } from './app.po';

describe('hoanglong-manager App', () => {
  let page: HoanglongManagerPage;

  beforeEach(() => {
    page = new HoanglongManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
