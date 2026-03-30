import{test,expect} from '@playwright/test'


test("iframe",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    const locat=await page.frames()
    console.log(await locat.length);

    for(let a of locat){
        console.log(a.url());
    }

//frame
//framelocator

    let frame1=await page.frame({name:"iframe-name"})

    await frame1.locator('(//a[text()="JOIN NOW"])[1]').click()


    await page.pause()
    
})

test.only("nested frame",async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")

    const frame1=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"})

    await frame1.locator('//input[@name="mytext3"]').fill("playwright")

    const child=await frame1.childFrames();

    await child[0].locator('(//div[@class="AB7Lab Id5V1"])[2]').check()

    await page.pause()
})