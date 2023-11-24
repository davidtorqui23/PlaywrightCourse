Feature('example');

Scenario('Should load website',  ({ I }) => {
    I.amOnPage("https://www.saucedemo.com/")
    I.see('Swag Labs')
});

Scenario('Assertions Dont See',  ({ I }) => {
    I.amOnPage("https://www.saucedemo.com/")
    I.dontSee('Google')
});

Scenario('Assertions See Element',  ({ I }) => {
    I.amOnPage("https://www.saucedemo.com/")
    I.seeElement('#login-button')
});