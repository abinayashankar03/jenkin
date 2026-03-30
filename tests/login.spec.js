import{test,expect} from '@playwright/test'


test("facebook login",async({page})=>{
    await page.goto("https://www.facebook.com/")

    await page.locator('[name="email"]').fill("example@gmail.com")
    await page.locator("#_R_1hmkqsqppb6amH1_").fill("password")
    await page.locator('[role="button"]').click()

    await page.waitForTimeout(5000)
})

test.only("automation site",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.getByPlaceholder("Enter Name").fill("playwright")
    await page.getByRole('button',{name:"START"}).click()


    await page.waitForTimeout(3000)
})