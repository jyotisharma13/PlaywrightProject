import {test,expect} from '@playwright/test';

test("context with options",async({browser})=>{
    const context =await browser.newContext({
        viewport:{width:1280,height:720},
        locale:'en-US',
        timezoneId:'America/New_York',
        geolocation:{latitude:40.7128,longitude:-74.0060},
        permissions:['geolocation'],
    })
    const page = await context.newPage();
    await page.goto("https://vwo.com/#login");
    await context.close();
});

test("test in mobile browser",async({ browser })=>{
    const iphone = {
    viewport:{width: 375, height: 667 },
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
   deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    };
    const context = await browser.newContext(iphone);
    const page = await context.newPage();
     await page.goto("https://vwo.com/#login");
     await context.close();
})