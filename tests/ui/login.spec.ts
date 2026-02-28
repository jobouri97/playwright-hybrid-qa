import { test, expect } from '@playwright/test';

test('UI: login (saucedemo)', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/', {
        waitUntil: 'domcontentloaded',
        timeout: 60_000,
    });
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await expect(page).toHaveURL(/inventory\.html/);
    await expect(page.locator('[data-test="title"]')).toHaveText('Products');
});


