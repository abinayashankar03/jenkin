import {test,expect} from '@playwright/test'


test("assertion",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/")
    await expect(page).toHaveTitle("Automation Testing Practice")
    await expect(page.locator('//h1[@class="title"]')).toBeVisible()
    await expect(page.locator('//input[@placeholder="Enter Name"]')).toBeEmpty()
    await page.locator('//input[@placeholder="Enter Name"]').fill("playwright")
    await expect(page.locator('//input[@placeholder="Enter Name"]')).toHaveValue("playwright")
    await expect(page.locator('//input[@placeholder="Enter Name"]')).toBeEmpty()
    await expect(page.locator('//span[contains(text(),"Cypress")]')).toHaveText("For Selenium, Cypress & Playwright")
    await expect(page.locator('//span[contains(text(),"Cypress")]')).toContainText("Playwright")
    await expect.soft(page.locator('//input[@placeholder="Enter Name"]')).toBeEmpty()
    await page.locator('//input[@placeholder="Enter Name"]').fill("playwright")
    await expect(page.locator('//input[@placeholder="Enter Name"]')).toHaveValue("playwright")
    await expect(page.locator('//input[@placeholder="Enter Name"]')).toBeEmpty()

})