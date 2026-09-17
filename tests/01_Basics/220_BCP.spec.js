import { chromium } from "playwright";

async function run() {

    // LEVEL 1: Launch browser — heaviest operation, do it once
    const browser = await chromium.launch({ headless: false });
    console.log("Browser Launched", browser);


    // LEVEL 2: Create context — fresh session, isolated cookies
    const context = await browser.newContext();
    console.log("Context created", context);


    // LEVEL 3: Open page — a tab inside the context
    const page = await context.newPage();
    console.log("Page opened");


    // Cleanup - reverse order
    await page.close();
    await context.close();
    await browser.close();

}

run();
