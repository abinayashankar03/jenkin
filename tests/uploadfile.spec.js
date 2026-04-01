import {test,expect} from '@playwright/test'

test("single file upload",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.waitForTimeout(3000)

    await page.locator('//input[@id="singleFileInput"]').setInputFiles("C:/Users/HP/Downloads/img_one.webp")
    
    await page.click('//button[text()="Upload Single File"]')

    await page.pause()
})

test("file download",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/download")

    const [download]=await Promise.all([
        page.waitForEvent('download'),
        await page.locator('//a[text()="playwright note.txt"]').click()
    ])

    

    await page.waitForTimeout(3000)
})