import { NgRouterE1Page } from './app.po';

describe('ng-router-e1 App', () => {
  let page: NgRouterE1Page;

  beforeEach(() => {
    page = new NgRouterE1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
