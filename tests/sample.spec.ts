import { test, expect } from '@playwright/test';

test('should navigate to the about page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('/');
  // Find an element with the text 'About Page' and click on it
  // await page.click('text=Start a Conversation');
});
