import {test,expect} from '@playwright/test'


test("dropdown",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // await page.locator('//select[@id="country"]').selectOption("United Kingdom")
    await page.locator('//select[@id="country"]').selectOption({value:"uk"})
    await page.locator('//select[@id="country"]').selectOption({index:2})


    await page.pause()
})

test.only("multi-select dropdown",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('//select[@id="animals"]').selectOption(["Deer","Dog","Fox"])

    await page.pause()
})