import { test, expect } from '@playwright/test'
import { LoginPage } from '../../Page_Objects/LoginPage'

test.describe("Login / Logout Flow", () => {

    let loginPage: LoginPage

    test.beforeEach(async ({page}) => {

        // Iniciamos un objeto de la clase
        loginPage = new LoginPage(page)

        // Vamos a la pagina
        await loginPage.visit()

    })

    test('Negative Scenario for Login ', async () => {

        await loginPage.login("username", "error")
        await loginPage.assertErrorMesage()

    })

    test('Positive Scenario for Login ', async ({page}) => {
        
        await loginPage.login('username', 'password')

        await page.goto("http://zero.webappsecurity.com/index.html")

    })

})