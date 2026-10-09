import {test , expect} from '@playwright/test';
test.use(
    {storageState: "./mysession.json"}
)
test("got directly to dashboard page ", async({page})=>{
    await page.goto("https://app.wingify.com/#/dashboard");
    await expect(page).toHaveURL(/#\/dashboard/);
    await page.waitForTimeout(3000);
})