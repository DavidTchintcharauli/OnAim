import { test, expect } from '@playwright/test';
import { ExamplePromotionStep } from '../../src/steps/examplePromotion/examplePromotionStep';

test.describe('Promotion Creation Flow', () => {
  test('Should create promotion via UI', async ({ page }) => {
    const promotionSteps = new ExamplePromotionStep(page);

    await promotionSteps.navigateToPromotionPage();
    await promotionSteps.clickNewPromotion();
    await promotionSteps.clickEmptyFormCard();
    await promotionSteps.fillPromotionForm('Playwright Promotion', 'Created by POM test');
    await promotionSteps.clickCreatePromotion();

    await expect(page.locator('text=Playwright Promotion')).toBeVisible();
  });
});
