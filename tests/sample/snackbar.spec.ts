import { test, expect } from '@playwright/test';

test('success 버튼 클릭시 success snackbar가 나타난다.', async ({ page }) => {
  const url = '/sample/snackbar';

  await page.goto(url);

  await page.locator('button', { hasText: 'Open success snackbar' }).click();
  await expect(page.locator('#notistack-snackbar')).toContainText(['success']);
});
