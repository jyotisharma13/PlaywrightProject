import {test, expect} from '@playwright/test';
test("verify the error message in the wingify free trial", async({page})=>{
 await page.goto("https://app.vwo.com/#/login");
 let username= page.getByRole('textbox', { name: 'email' });
 await username.fill('admin@vwo.com');
 let password= page.getByRole('textbox', { name: 'password' });
 await password.fill('admin123');