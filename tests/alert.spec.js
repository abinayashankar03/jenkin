import {test,expect} from '@playwright/test'


test("simple alert",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on('dialog',async dialog=>{
        console.log(dialog.type())
        console.log(dialog.message())
        expect(dialog.message()).toBe("I am an alert box!")

        await dialog.accept()
    })
    await page.locator('//button[@id="alertBtn"]').click()
})

test("confirmation alert",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on('dialog',async dialog=>{
        console.log(dialog.type())
        console.log(dialog.message())

        await dialog.dismiss()
    })
    await page.locator('//button[@id="confirmBtn"]').click()

    await expect(page.locator('//p[@id="demo"]')).toHaveText("You pressed Cancel!")

    await page.pause()

})