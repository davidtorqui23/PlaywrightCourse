import { expect, Locator, Page } from '@playwright/test'
import { AbstractPage } from './AbstractPage'

export class LoginPage extends AbstractPage{

    // Define Selectors
    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly submitButton: Locator
    readonly errorMesage: Locator

    // Init Selectors using constructor
    constructor(page: Page){
        super(page)
        this.usernameInput = page.locator("#user_login"),
        this.passwordInput = page.locator("#user_password"),
        this.submitButton = page.locator("text=Sign in"),
        this.errorMesage = page.locator(".alert-error")
    }

    // Define Login Page Methods
    async visit() {
        await this.page.goto("http://zero.webappsecurity.com/login.html")
    }

    async login(username: string, password:string) {
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.submitButton.click()
    }

    async assertErrorMesage() {
        await expect(this.errorMesage).toContainText("Login and/or password are wrong.")
    }

}