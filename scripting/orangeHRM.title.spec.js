//@ts-check
const { test, expect, } = require('@playwright/test')

test('OrangeHRM Title Verification', async({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    const title = await page.title();
    await expect(title).toBe('OrangeHRM');

});