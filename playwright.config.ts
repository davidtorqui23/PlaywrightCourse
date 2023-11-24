import { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {

    // Tiempo Implicito en el proyecto
    timeout: 20000, 

    // Numero de intentos que va a realizar para test Failed
    retries: 1,

    // Configuracion del Navegador
    use:{

        // Propiedad del navegador
        headless: true,

        viewport: {
            // Tamanio del navegador
            width: 1280,
            height: 720
        },
        // Otra espera implicita por acciones del navegador
        actionTimeout: 15000,

        // Ignora errores de HTTP
        ignoreHTTPSErrors: true,

        // Opcion de video
        video: "off",

        // Opcion de Screenshots
        screenshot: 'only-on-failure'

    },

    // Especificos nombres para los navegadores
    projects:[
        {
            name:"Chromium",
            use: {
                browserName: 'chromium'
            }
        },
        {
            name: 'Firefox',
            use:{
                browserName: 'firefox'
            }
        },
        {
            name: 'Webkit',
            use:{
                browserName: 'webkit'
            }
        }
    ]
}

export default config