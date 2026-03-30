import {test,expect, chromium} from '@playwright/test'

test("handling tabs",async()=>{
    const browser=await chromium.launch()
    const context=await browser.newContext()
    const page1=await context.newPage()
    const page2=await context.newPage()

    await page1.goto("https://testautomationpractice.blogspot.com/")
    console.log(await page1.title());
    await page1.waitForTimeout(3000)

    await page2.goto("https://www.facebook.com/")
    console.log(await page2.title());
    await page2.waitForTimeout(3000)
})

test("multiple_tabs",async()=>{
    const browser=await chromium.launch()
    const context=await browser.newContext()
    const page=await context.newPage()

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    console.log(await page.title());

    await page.waitForTimeout(5000)

    const [newtab]=await Promise.all([
        context.waitForEvent('page'),
        await page.click('//a[text()="OrangeHRM, Inc"]')
    ])

    await newtab.waitForLoadState()
    console.log(await newtab.title());
    
    

})

test("page navigation",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.waitForTimeout(3000)
    console.log(await page.title());

    await page.goto("https://www.facebook.com/")
    await page.waitForTimeout(3000)
    console.log(await page.title());

    await page.goBack()
    await page.waitForTimeout(3000)
    console.log(await page.title());
    
    await page.goForward()
    await page.waitForTimeout(3000)
    console.log(await page.title());


})

test("multipleamazon_tabs1",async({page})=>{
    await page.goto("https://www.amazon.in/ref=nav_logo")
    await page.waitForTimeout(5000);
    console.log(await page.title());

    await page.goto("https://www.facebook.com/")
    await page.waitForTimeout(5000);
    console.log(await page.title());

    await page.goBack()
    await page.waitForTimeout(5000);
    console.log(await page.title());

    await page.goForward()
    await page.waitForTimeout(5000);
    console.log(await page.title());
})

test.only("multipleamazon_tabs",async()=>{
    const browser=await chromium.launch()
    const context=await browser.newContext()
    const page=await context.newPage()
 
    await page.goto("https://www.amazon.in/ref=nav_logo")
    console.log(await page.title());

    await page.locator('//img[@alt="Refrigerators"]').click()
    await page.waitForTimeout(3000)
 
    const [newtab]=await Promise.all([
        context.waitForEvent('page'),
        await page.click('//span[contains(text()="Haier 165L 1 Star Direct Cool Single Door Refrigerator")]')
    ])
    await newtab.waitForLoadState()
    console.log(await newtab.title());
})