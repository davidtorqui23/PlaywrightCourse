import { test, expect } from '@playwright/test'

test.describe("Search in the page", () => {

    test.beforeEach(async ({page}) => {

        // Vamos a la pagina
        await page.goto("http://zero.webappsecurity.com/")

    })

    test('Search Bills', async ({page}) => {

        await page.fill('#searchTerm', 'Zero')
        await page.keyboard.press('Enter')

        const numberResult = await page.locator('li > a')
        await expect(numberResult).toHaveCount(12)

    })

})