import { Page } from '@playwright/test'

export class AbstractPage {

    // Define Selectors
    readonly page: Page

    // Init Selectors using constructor
    constructor(page: Page){
        this.page = page
    }

    // Define Login Page Methods
    async wait(time) {
        await this.page.waitForTimeout(time)
    }

}