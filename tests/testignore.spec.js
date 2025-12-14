const {test, expect} = require('@playwright/test');

// to run this test use the command: npx playwright test tests/firsttest.spec.js

test('basic test', async ({page}) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveTitle('Swag Labs');
});