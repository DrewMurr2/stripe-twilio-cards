import { TesterooskiPage } from './app.po';

describe('testerooski App', () => {
  let page: TesterooskiPage;

  beforeEach(() => {
    page = new TesterooskiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
