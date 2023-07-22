import BasePage from '@pages/base'
import { Locator, Page } from '@playwright/test'

export default class InventoryPage extends BasePage {
    public backpack_item: Locator
    public burger_menu: Locator
    public add_to_card: Locator

    constructor(page: Page) {
        super(page)
        this.setPage = page
    }

    set setPage(page: Page) {
        this.page = page
        this.burger_menu = page.locator('[id="react-burger-menu-btn"]')
        this.add_to_card = page.locator('button[data-test*="add-to-cart"]')
        //this.backpack_item = page.locator('');
    }

    set set_backpack_item(product: string) {
        this.backpack_item = this.page.locator(
            `[class='inventory_item_name']`,
            { hasText: product }
        )
    }

    async openItem(backpack_item: string) {
        this.set_backpack_item = backpack_item
        await this.backpack_item.click()
    }

    async addToCard() {
        await this.add_to_card.click()
    }

    async goto(path = '/inventory.html') {
        await super.goto(path)
    }
}
