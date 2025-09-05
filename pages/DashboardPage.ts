import { Page } from "@playwright/test";

export class DashboardPage {
    protected page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async goto(tab: string) {
        await this.page.waitForTimeout(5000);
        await this.page.waitForSelector(`.oxd-main-menu li span:has-text("${tab}")`);
        await this.page.click(`.oxd-main-menu li span:has-text("${tab}")`);
    }

    async getListOfMenu() {
        await this.page.waitForTimeout(5000);
        const menuLocators = await this.page.locator('.oxd-main-menu li span').all();
        return await Promise.all(menuLocators.map(e => e.textContent()));
    }

}