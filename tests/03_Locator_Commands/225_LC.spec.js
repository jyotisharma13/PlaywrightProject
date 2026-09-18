import{test,expect}from '@playwright/test';

test(' Test verify', async({page})=>{
    await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter',{waitUntil:'commit'});
    const response = await page.goto('https://app.thetestingacademy.com/login',{waitUntil:'domcontentloaded',
        timeout:10000,
    referrer:'https://app.thetestingacademy.com'});
})
