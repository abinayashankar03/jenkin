import{test,expect} from '@playwright/test'

test("radio button",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('//input[@id="male"]').check()
    await expect(page.locator('//input[@id="male"]')).toBeChecked()
    await expect(page.locator('//input[@id="female"]')).not.toBeChecked()

    await page.waitForTimeout(3000)
})

test("checkbox",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('//input[@id="monday"]').check()
    await expect(page.locator('//input[@id="monday"]')).toBeChecked()
    await page.locator('//input[@id="monday"]').uncheck()

    await page.waitForTimeout(3000)
})

test("multiple checkbox",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    let locat=['//input[@id="monday"]','//input[@id="wednesday"]','//input[@id="friday"]']

    for(let one of locat){
        await page.locator(one).check()
        await expect(page.locator(one)).toBeChecked()
    }

    await page.pause()
})