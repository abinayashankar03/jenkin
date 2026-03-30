import {test,expect} from '@playwright/test'

test("keyboard_action",async({page})=>{
    await page.goto("https://gotranscript.com/text-compare")

    await page.locator('//textarea[@name="text1"]').fill("playwright")

    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Control+V')

    await page.locator('//button[@id="recaptcha"]').click()

    await page.pause()
})