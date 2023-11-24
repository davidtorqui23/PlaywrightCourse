const { chromium } = require('playwright')
const { expect } = require('chai').expect

let browser
let page

before(async () => {
    browser = await chromium.launch()
})

after(async () => {
    await browser.close()
})

beforeEach(async () => {
    page = await browser.newPage()
})

afterEach(async () => {
    await page.close()
})

it('My first Playwright with mocha test', async () => {
    await page.goto("https://www.saucedemo.com/")
    expect('.login_logo').to.exit
})