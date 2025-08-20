import { Page, expect } from '@playwright/test';
import { GENERAL_SELECTORS } from '../../Data/selectors/promotion/general/generalSettings';
import { MAIN_SELECTORS } from '../../Data/selectors/promotion/mainSelectors/mainSelectors';
import { AUTH_SELECTORS } from '../../Data/selectors/promotion/auth/authModules';

export class ExamplePromotionStep {
    constructor(private page: Page) { }
    
    private base = process.env.BASE_URL ?? 'https://dev-onaimfrontend.onaim.io';

    async navigateToPromotionPage() {
        await this.page.goto('https://dev-onaimfrontend.onaim.io/dashboard/promotions?search=&coinType=all&status=all&player-status=all&schedule-status=active&HistoryStatus=existing&action=all');
    }

    async login() {
        await this.page.goto('https://dev-onaimfrontend.onaim.io/login');
        await this.page.getByPlaceholder('Email address').fill('superadmin@test.com');
        await this.page.locator(AUTH_SELECTORS.emailInput).fill('superadmin@test.com')
        await this.page.locator(AUTH_SELECTORS.passwordInput).fill('superadmin');
        await this.page.locator(AUTH_SELECTORS.signInButton).click();

        await expect(this.page).toHaveURL(new RegExp(`${this.base}/dashboard`));
              await this.page.waitForLoadState('networkidle');
    }

    async clickNewPromotion() {
        await this.page.screenshot({ path: 'screenshots/before-click-new-promotion.png', fullPage: true });
        await this.page.locator(MAIN_SELECTORS.main.newPromotionButton).click();
    }

    async clickEmptyFormCard() {
        await this.page.locator(MAIN_SELECTORS.main.emptyFormCardButton).click();
    }

    async fillPromotionForm(title: string, description: string) {
        await this.page.locator(GENERAL_SELECTORS.inputs.title).fill(title);
        await this.page.locator(GENERAL_SELECTORS.inputs.description).fill(description);
    }

    async clickCreatePromotion() {
        await this.page.locator(MAIN_SELECTORS.main.createPromotionButton).click();
    }
}
