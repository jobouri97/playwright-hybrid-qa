import { test, expect } from '@playwright/test';
import { randomUser } from '../../src/utils/testData';

const REALWORLD_API = 'https://api.realworld.show/api';

async function isRealWorldApiReachable(request: import('@playwright/test').APIRequestContext) {
  try {
    const res = await request.get(`${REALWORLD_API}/tags`, { timeout: 10_000 });
    return res.ok();
  } catch {
    return false;
  }
}

test('@api API: register user (realworld) returns token', async ({ request }) => {
  const apiReachable = await isRealWorldApiReachable(request);
  test.skip(!apiReachable, 'RealWorld API is unreachable from this environment');

  const user = randomUser();

  const res = await request.post(`${REALWORLD_API}/users`, {
    data: { user },
    timeout: 20_000,
  });

  expect(res.status(), await res.text()).toBe(201);

  const body = await res.json();
  expect(body.user).toBeTruthy();
  expect(body.user.email).toBe(user.email);
  expect(body.user.username).toBe(user.username);
  expect(body.user.token).toBeTruthy();
});
