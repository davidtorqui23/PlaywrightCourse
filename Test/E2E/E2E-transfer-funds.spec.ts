import { test, expect } from '@playwright/test'

test.describe("Transfer Funds", () => {

    test.beforeEach(async ({page}) => {

        await page.goto("http://zero.webappsecurity.com/")

        await page.click('#signin_button')

        await page.fill('#user_login', 'username')
        await page.fill('#user_password', 'password')

        await page.click('text=Sign in')

        await page.goto("http://zero.webappsecurity.com/bank/transfer-funds.html")

    })

    test('Transfer Fund Succesfull ', async ({page}) => {

        await page.selectOption('#tf_fromAccountId', '2')
        await page.selectOption('#tf_toAccountId', '3')
        await page.fill('#tf_amount', '100')
        await page.fill('#tf_description', 'Transfer')
        await page.click('text=Continue')

        await page.click('#btn_submit')

        const Mesage = await page.locator('//*[@id="transfer_funds_content"]/div/div/div[1]')
        await expect(Mesage).toContainText("You successfully submitted your transaction.")

    })

    test('Select Dates ', async ({page}) => {

        await page.goto("http://zero.webappsecurity.com/bank/pay-bills.html")
        
        await page.fill('#sp_amount', '100')
        await page.fill('#sp_date', '2023-11-02')
        await page.click('#pay_saved_payees')

        await page.waitForTimeout(3000)

    })

})