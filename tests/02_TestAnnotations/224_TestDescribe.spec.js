import{test, expect} from '@playwright/test';

test.describe('test describe login page', async()=>{

    test('test valid credentials',async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/");
    })

    test('test invalid credentials',async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/");
    })

    test.fixme('1checkout with PayPal', async ({ page }) => {
    // never executes
    });

    test.skip('checkout with PayPal', async ({ page }) => {
    // never executes
    });

})