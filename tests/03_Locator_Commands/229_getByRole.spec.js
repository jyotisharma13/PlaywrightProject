import {test, expect} from '@playwright/test';
test("verify the error message in the wingify free trial", async({page})=>{
 await page.goto("https://app.vwo.com/#/login");
 let username= page.getByRole('textbox', { name: 'email' });
 await username.fill('admin@vwo.com');
 let password= page.getByRole('textbox', { name: 'password' });
 await password.fill('admin123');
const checkBox = page.getByRole('checkbox', { name: 'Remember me' });
const Chk= await page.getByText('Remember me', { exact: true }).click();

//(await expect(Chk).toBeChecked();
//await expect(checkBox).toBeVisible();
 //(await checkBox.check();
 let signInButton = page.getByRole('button', {
    name: 'Sign in', exact: true
  });
  console.log(signInButton.count());
 await signInButton.click();
 let errorMessage = page.getByText('Your email, password, IP address or location did not match', { exact: true });
 await expect(errorMessage).toBeVisible('Your email, password, IP address or location did not match');

})