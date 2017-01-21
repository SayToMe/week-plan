import { WeekPlanPage } from './app.po';

describe('week-plan App', function() {
  let page: WeekPlanPage;

  beforeEach(() => {
    page = new WeekPlanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
