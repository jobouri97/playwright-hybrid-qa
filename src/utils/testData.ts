export function randomUser() {
  const id = Date.now();
  return {
    username: `ali_${id}`,
    email: `ali_${id}@mail.com`,
    password: 'Test@12345',
  };
}
