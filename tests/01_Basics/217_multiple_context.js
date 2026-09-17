import {chormium}from"playwright";
async function multiUserTest(){
    let browser = await chromium.launch({headless:false});
    //Admin
    let AdminContext= await browser.newContext();
    let AdminPage= await AdminContext.newPage();
    await AdminPage.goto("https://app.vwo.com/login");
    console.log("Admin:on login page");
    //viewer
    let viewerContext= await browser.newContext();
    let viewerPage= await viewerContext.newPage();
    await viewerPage.goto("https://app.vwo.com/login");
    console.log("Viewer:on login page");

    await AdminContext.close();
    await viewerContext.close();
    await browser.close();
}
multiUserTest();