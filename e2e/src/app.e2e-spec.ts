import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';



describe('keep app',()=>{
  it('should launch application with login view',()=>{
    browser.get("/");
    expect(browser.getCurrentUrl()).toContain('login');
    browser.sleep(3000);
  })

  it('should allow users to login and on success redirects to dashboard with note-view',()=>{
    let inputElements = element.all(by.css('input'));

    inputElements.get(0).sendKeys('admin');
    inputElements.get(1).sendKeys('password');

    let button = element(by.css('button'))

    button.click();

    expect(browser.getCurrentUrl()).toContain('dashboard/noteview')

    browser.sleep(4000);
  })

  it('should display on note-view the correct no. of notes retrieved',()=>{
    let cards = element.all(by.css('mat-card'));
    expect(cards.count()).toBe(9);
  })

  it('should allow users to add note and increment the note count',()=>{
    element(by.css('mat-expansion-panel-header')).click();
    element(by.css('input')).sendKeys('Dummy Note');
    element(by.css('textarea')).sendKeys('Dummy Note Text');

    element(by.css('button')).click();

    let cards = element.all(by.css('mat-card'));
    expect(cards.count()).toBe(10);

  })


})


// describe('workspace-project App', () => {
//   let page: AppPage;

//   beforeEach(() => {
//     page = new AppPage();
//   });

//   it('should display welcome message', () => {
//     page.navigateTo();
//     expect(page.getTitleText()).toEqual('Welcome to keep-app!');
//   });

//   afterEach(async () => {
//     // Assert that there are no errors emitted from the browser
//     const logs = await browser.manage().logs().get(logging.Type.BROWSER);
//     expect(logs).not.toContain(jasmine.objectContaining({
//       level: logging.Level.SEVERE,
//     } as logging.Entry));
//   });
// });
