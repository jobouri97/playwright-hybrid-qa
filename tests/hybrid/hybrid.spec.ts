import { test, expect } from '@playwright/test';
import { randomUser } from '../../src/utils/testData';

test('HYBRID: API register -> UI login (RealWorld)', async ({ request, page }) => {
  const newUser = randomUser();

  const registerRes = await request.post('https://api.realworld.show/api/users', {
    data: { user: newUser },
  });

  expect(registerRes.status(), await registerRes.text()).toBe(201);

  await page.goto('https://demo.realworld.show/login', { waitUntil: 'domcontentloaded' });

  await expect(page.locator('form')).toBeVisible({ timeout: 60_000 });

  await page.getByPlaceholder('Email').fill(newUser.email);
  await page.getByPlaceholder('Password').fill(newUser.password);
  await page.getByRole('button', { name: /sign in/i }).click();

  await expect(page.getByRole('link', { name: newUser.username })).toBeVisible({ timeout: 60_000 });
});