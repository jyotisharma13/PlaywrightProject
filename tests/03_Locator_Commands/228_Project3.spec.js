import{ test, expect} from '@playwright/test';
test('verfiy the  failure login', async({page})=>{
await page.goto("https://wingify.com/de/free-trial/");
let loginEmail = page.locator("//input[@id='free-trial-step1-email']");
//let loginPassword = page.locator('#');

await loginEmail.fill('assaf');
await page.locator("#free-trial-step1-gdpr-consent-checkboxcu-marketing-consent-checkbox").check();
await page.locator('//input[@data-qa="free-trial-step1-gdpr-consent-checkboxgdpr-consent-checkbox"]').check();
await page.locator("//button[@data-qa='page-su-submit']").first().click();
let errorMessage1 = page.locator("//div[contains(@class,'invalid-reason')]").first();
let errorMessageText = await errorMessage1.textContent();
await expect(errorMessageText).toContain("Die von dir eingegebene E-Mail-Adresse ist falsch.");
//await page.pause();
})