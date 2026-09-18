import{test,expect} from '@playwright/test';
test('set referer for the entire context', async({browser})=>{
    let context = await browser.newContext({
        extraHTTPHeaders:{
            referer:'https://app.thetestingacademy.com'
        }
    });
    let page = await context.newPage();
    await page.goto('https://vwo.com/#login');
    console.log("Page 1 — partner referer included");
    await page.goto('https://katalomn.com/#login');
    console.log("Page 2 — partner referer included");
})