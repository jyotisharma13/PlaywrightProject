import {chromium, Browser,BrowserContext, Page} from "playwright";
async function run(){
    //let browser: Browser = await chromium.launch({headless:false});
    const browser = await chromium.launch(({headless:false}));
    const BrowserContext = await browser.newContext();
    const page = await BrowserContext.newPage();

    await page.goto("https://example.com");
    console.log("Title of the page is: "+await page.title());
    await page.close();
    await BrowserContext.close();
    await browser.close();
}