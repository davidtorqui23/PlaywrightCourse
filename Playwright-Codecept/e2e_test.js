Feature("Zero Bank Application - E2E Test")

Before(({ I }) => {

    console.log('BEFORE HOOK')
    I.amOnPage("http://zero.webappsecurity.com/")

});

After(({ I }) => {

    console.log('AFTER HOOK')

});

Scenario('Login Test - Negative',  ({ I, LoginPage}) => {

    LoginPage.submitLogin("algo", "algo")

});