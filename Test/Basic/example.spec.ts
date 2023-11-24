import {test, expect } from '@playwright/test'

// Esta es la estructura del metodo de Playwright
test.skip("Simple basic test", async ({page}) => {

    // Estoy navegando a la pagina 
    await page.goto("https://testingqarvn.com.es/datos-personales/")

    // Estoy asignando a una variable el elemento
    const pageTitle  = await page.locator('h2')

    // Esto validando el texto que quiero
    await expect(pageTitle).toContainText("Datos Personales Básicos")

})


// Esta es la estructura del metodo de Playwright
test.skip("Click in element and validate Alert", async ({page}) => {

    // Estoy navegando a la pagina 
    await page.goto("https://testingqarvn.com.es/datos-personales/")

    // Estoy dando un click
    await page.click('#wsf-1-field-27')

    // Guardo la alerta en una variable
    const alertMessage = await page.locator('.wsf-alert')

    // Esto validando el texto que quiero
    await expect(alertMessage).toContainText("Gracias por tu encuesta.\n")

})

test.skip("Selector", async ({page}) => {

    // Seleccionar un selector por text
    await page.click("text=Submit")

    // Css Selector

        // For Button
    await page.click('button')

        // For ID
    await page.click('#wsf-1-field-27')

        // For Class
    await page.click('.wsf-button wsf-button-full wsf-button-primary')

        // Only visible Css Selector
    await page.click('.submit-button:visible')

        // Combinations
    await page.click('#username .first')

        // Xpath
    await page.click('//button')
})

// Esta es la estructura del metodo de Playwright
test.only("Working with Inputs ", async ({page}) => {

    // Estoy navegando a la pagina 
    await page.goto("https://testingqarvn.com.es/datos-personales/")

    // Estoy Ingresando datos
    await page.fill("#wsf-1-field-21", "David")
    await page.fill("#wsf-1-field-22", "Torres")
    await page.fill("#wsf-1-field-23", "email@gmail.com")
    await page.fill("#wsf-1-field-24", "320241")
    await page.fill("#wsf-1-field-28", "Esta es mi direccion")

    // Estoy dando un click
    await page.click("text=Submit")

    // Guardo la alerta en una variable
    const alertMessage = await page.locator('.wsf-alert')

    // Esto validando el texto que quiero
    await expect(alertMessage).toContainText("Gracias por tu encuesta.\n")

})

// Esta es la estructura del metodo de Playwright
test.skip("Assertions", async ({page}) => {

    // Estoy navegando a la pagina 
    await page.goto("https://testingqarvn.com.es/datos-personales/")

    // Estoy validando que este en la pagina deseada
    await expect(page).toHaveURL("https://testingqarvn.com.es/datos-personales/")

    // Estoy validando el titulo de la pagina
    await expect(page).toHaveTitle("Datos Personales | TestingQaRvn")

    // Estoy asignando a una variable el elemento
    const element  = await page.locator('h2')

    // Validar si el elemento es visible
    await expect(element).toBeVisible()

    // Validar si el elemento contiene un texto
    await expect(element).toHaveText("Datos Personales Básicos")

    // Validar cuantos elementos estan en la pagina
    await expect(element).toHaveCount(1)

    // Validar si el elemento no existe
    const element_2  = await page.locator('h5')
    await expect(element_2).not.toBeVisible()

})

// Esta es la estructura del metodo de Playwright
test.describe("My First Test Suit", () => {

    // Esta es la estructura del metodo de Playwright
    test("Simple basic test", async ({page}) => {

        // Estoy navegando a la pagina 
        await page.goto("https://testingqarvn.com.es/datos-personales/")

        // Estoy asignando a una variable el elemento
        const pageTitle  = await page.locator('h2')

        // Esto validando el texto que quiero
        await expect(pageTitle).toContainText("Datos Personales Básicos")

    })

    // Esta es la estructura del metodo de Playwright
    test("Click in element and validate Alert", async ({page}) => {

        // Estoy navegando a la pagina 
        await page.goto("https://testingqarvn.com.es/datos-personales/")

        // Estoy dando un click
        await page.click('#wsf-1-field-27')

        // Guardo la alerta en una variable
        const alertMessage = await page.locator('.wsf-alert')

        // Esto validando el texto que quiero
        await expect(alertMessage).toContainText("Gracias por tu encuesta.\n")

    })

})


