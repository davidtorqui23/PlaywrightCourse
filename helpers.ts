export async function loadHomePage(page) {

    // Estoy navegando a la pagina 
    await page.goto("https://testingqarvn.com.es/datos-personales/")

    // Esperar un tiempo
    await page.waitForTimeout(3000)
    
}
