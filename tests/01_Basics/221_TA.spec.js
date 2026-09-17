import { test } from "@playwright/test";

test("Navigating to the TTA website", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter", {
        waitUntil: "domcontentloaded"
    });
});
test("BCP-in app.vwo.com two roles", async ({ browser }) => {
    let adminContext = await browser.newContext();
    let userContext = await browser.newContext();
    let guestContext = await browser.newContext();

        const adminPage = await adminContext.newPage();
        await adminPage.goto("https://app.thetestingacademy.com/playwright/");

        const userPage = await userContext.newPage();
        await userPage.goto("https://sdet.live");

        const guestPage = await guestContext.newPage();
        await guestPage.goto("https://scrolltest.com");
  
        
            adminContext.close();
            userContext.close();
            guestContext.close();
       
   
});