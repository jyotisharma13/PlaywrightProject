import {test, expect} from '@playwright/test';
test.skip('test checkout Paypal',async({page})=>{
//never excutes
})
test.only("chek login page", async({page})=>{
    //only this test excutes
})
test.fail('test total is wrong',async({page})=>{
    expect(90).toBe(100) //this test will fail
})
test.fixme('upload 2GB file', async ({page}) => {
  // skipped, but flagged as "needs fixing"
})
test('full regression report',async({page})=>{
    test.slow() //this test will be slow
    console.log(test.info().timeout) //this will print the timeout of this test;
})
test('mobile layout', async({page, browserName})=>{
    test.fixme(browserName === 'firefox', 'Firefox does not support this feature yet');
    await page.goto('https://example.com');
})



