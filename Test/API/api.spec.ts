import { test, expect } from '@playwright/test'

test.describe.parallel('API Testing ', () => {

    const baseUrl = "http://localhost:3000/posts"

    test('Assert Responde Status ', async ({request}) => {

        const response = await request.get(baseUrl)

        expect(response.status()).toBe(200)
        
    })

    test('Assert Responde Status Fail ', async ({request}) => {

        const response = await request.get(baseUrl)

        expect(response.status()).not.toBe(400)
        
    })

    test('Assert Responde Body ', async ({request}) => {

        const response = await request.get(baseUrl)

        expect(response.status()).toBe(200)

        const responseBody = JSON.parse(await response.text())

        expect(responseBody[0].id).toBe(1)
        expect(responseBody[0].title).toBe("Modificar 2")
        expect(responseBody[0].author).toBeTruthy()
        
    })

    test.skip('POST', async ({request}) => {


        const response = await request.post(baseUrl, { data: {
            id: 6,
            title: "Nuevo",
            author: "David Torres"
        }})

        expect(response.status()).toBe(201)

        const responseBody = JSON.parse(await response.text())
        console.log(responseBody)
        
    })

    test('PUT', async ({request}) => {


        const response = await request.put(`${baseUrl}/6`, { data: {
            id:6,
            title: "Modificado 3",
            author: "Arley Torres"
        }})

        expect(response.status()).toBe(200)

        const responseBody = JSON.parse(await response.text())
        console.log(responseBody)
        
    })

    test('DELETE', async ({request}) => {

        const response = await request.delete(`${baseUrl}/4`)

        expect(response.status()).toBe(200)
        
    })

})