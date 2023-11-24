import { test, expect } from "@playwright/test"

test.describe('Visual Regression Testing Example ', () => {

    test('Full Page Snapshot ', async ({page}) => {
        await page.goto("https://www.saucedemo.com/")
        expect(await page.screenshot()).toMatchSnapshot('homepage.png')
    })

    test('Fail Page Snapchot ', async ({page}) => {
        await page.goto("https://www.saucedemo.com/")
        await page.fill('#user-name', 'username')
        expect(await page.screenshot()).not.toMatchSnapshot('homepage.png')
    })

    test('Single Element Snapshot ', async ({page}) => {
        await page.goto("https://www.saucedemo.com/")
        const pageElement = await page.locator('#login_button_container')
        expect(await pageElement.screenshot()).toMatchSnapshot('pageLogin.png')

    })

    test('Single Element Snapshot Fail ', async ({page}) => {
        await page.goto("https://www.saucedemo.com/")
        await page.fill('#user-name', 'username')
        const pageElement = await page.locator('#login_button_container')
        expect(await pageElement.screenshot()).not.toMatchSnapshot('pageLogin.png')

    })

})