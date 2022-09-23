import { test, expect } from '@playwright/test';

test('select에서 Ten을 선택하면 value 출력된다.', async ({ page }) => {
  const url = '/sample/select';

  await page.goto(url);

  await page.locator('#select').click();
  await page.locator('ul > li', { hasText: 'Ten' }).click();
  await expect(page.locator('h2')).toContainText(['10']);
});
