import { test, expect} from '@playwright/test';
test("check the login failure",async({page})=>{
    await page.goto('https://katalon-demo-cura.herokuapp.com/#appointment');
    let MakeMyAppointment = page.locator('#btn-make-appointment');
    await MakeMyAppointment.click();
    await expect(page).toHaveURL('https://katalon-demo-cura.herokuapp.com/profile.php#login');
    let emailAddress = page.locator('#txt-username');
    await emailAddress.fill('John Doe');
    let password= page.locator('#txt-password');
    await password.fill('ThisIsNotAPassword');
    let loginButton = page.locator('#btn-login');
    await loginButton.click();
   
});