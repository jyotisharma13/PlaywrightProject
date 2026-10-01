import {test, expect} from '@playwright/test';
test("verify the error message in the wingify free trial", async({page})=>{
 await page.goto("https://katalon-demo-cura.herokuapp.com/");
 let mainButton= page.getByRole('link',{name:'Make Appointment', exact:true});
 await mainButton.click();
 expect(page.url()).toContain('profile');
 await expect(
    page.getByRole('heading', {
      name: 'Login'
    })
  ).toBeVisible();

})