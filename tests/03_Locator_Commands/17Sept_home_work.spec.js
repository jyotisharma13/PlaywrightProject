import {test , expect} from '@playwright/test';
test('verfily thes failure on login page', async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    let loginEmail = page.locator('#email');
    await loginEmail.fill("tefsd@sdb.com");
    let loginPassword = page.locator('#password');
    await loginPassword.fill('asdfG124');
    await page.locator('//input[contains(normalize-space(),"Remember me")]').check();
    await page.pause();
})