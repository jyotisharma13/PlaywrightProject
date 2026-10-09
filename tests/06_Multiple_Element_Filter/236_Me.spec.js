import {test, expect} from '@playwright/test';
test("verify forgotten passwrod button is clickable", async({page})=>
{
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    const rightPanelLinksTexts = await page.locator("a.list-group-item").all();
    console.log(rightPanelLinksTexts.length);

    for(const link of rightPanelLinksTexts){
        console.log("link",link);
        //console.log(link.getAttribute('href'));
        console.log("href",await link.getAttribute('href'));
    }
    
    


await page.pause();
})