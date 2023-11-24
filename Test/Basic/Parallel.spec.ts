import {test, expect } from '@playwright/test'
import {loadHomePage} from '../../helpers'


test.describe.parallel(" Esto es un Test Paralelo", () => {

  // Esta es la estructura del metodo de Playwright
  test.beforeEach("Este es el primer Hook before Each", async ({page}) => {

    // Estoy llamando mi funcion que va a la url y espera 
    await loadHomePage(page)

    // Utilizar Playwright Inspector para el desarrollo o debug
    // await page.pause()

  })

  test.afterEach("Este es el after Hook Each", async ({page}) => {

  })


  // Esta es la estructura del metodo de Playwright
  test("Screenshots", async ({page}) => {

      // Tomando screenshot de la pagina completa
      await page.screenshot({path: "Screenshots\\homePage.png", fullPage:true})

      // Estoy Ingresando datos
      await page.fill("#wsf-1-field-21", "David")
      await page.fill("#wsf-1-field-22", "Torres")
      await page.fill("#wsf-1-field-23", "email@gmail.com")
      await page.fill("#wsf-1-field-24", "320241")
      await page.fill("#wsf-1-field-28", "Esta es mi direccion")

      // Tomando screenshot de los datos diligenciados
      await page.screenshot({path: "Screenshots\\fillupDatos.png", fullPage:true})

      // Estoy dando un click
      await page.click("text=Submit")

      // Esperar un tiempo
      await page.waitForTimeout(2000)

      // Guardo la alerta en una variable
      const alertMessage = await page.locator('.wsf-alert')

      // Tomando screenshot del resultado
      await page.screenshot({path: "Screenshots\\validateAlert.png", fullPage:true})

      // Esto validando el texto que quiero
      await expect(alertMessage).toContainText("Gracias por tu encuesta.\n")

  })

  // Esta es la estructura del metodo de Playwright
  test("Screenshots solo a un elemento", async ({page}) => {

      // Seleccionar la imagen del Inicio
      const imageHomePage = await page.locator('.wp-image-230')

        // Tomando screenshot de solo un elemento
      await imageHomePage.screenshot({path: "Screenshots\\imageHomePage.png"})

  })

})


