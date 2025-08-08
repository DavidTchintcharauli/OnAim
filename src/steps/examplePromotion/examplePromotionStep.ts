import { Page } from '@playwright/test';
import { MAIN_SELECTORS } from '../../constants/selectors/promotion/mainSelectors/mainSelectors';
import { GENERAL_SELECTORS } from '../../constants/selectors/promotion/general/generalSettings';

export class ExamplePromotionStep {
    constructor(private page: Page) { }

    async navigateToPromotionPage() {
        await this.page.goto('https://dev-onaimfrontend.onaim.io/dashboard/promotions?search=&coinType=all&status=all&player-status=all&schedule-status=active&HistoryStatus=existing&action=all');
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
