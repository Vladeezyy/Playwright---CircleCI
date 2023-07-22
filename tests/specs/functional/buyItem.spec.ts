import { test, expect } from '@fixtures/basePages'
import { configuration } from 'env/config'
import { customer, completeContainer } from 'constants/constant'

test.describe('SauseDemo. Buy item', () => {
    test.beforeEach(async ({ loginPage }) => {
        await test.step('Log in', async () => {
            await loginPage.goto()
            await loginPage.login(
                configuration.STANDATD_USER,
                configuration.USER_PASSWORD
            )
            await expect(loginPage.page).toHaveURL('/inventory.html')
        })
    })

    test('Buy item', async ({ cartPage, inventoryPage, context, page }) => {
        await test.step('Add item to card', async () => {
            await inventoryPage.openItem('Sauce Labs Backpack')
            await inventoryPage.addToCard()
            await expect(inventoryPage.page).toHaveURL(RegExp('inventory-item'))
        })
        await test.step('Go to card', async () => {
            await cartPage.openCart()
            await expect(page).toHaveURL('/cart.html')
        })
        await test.step('Buy item', async () => {
            await cartPage.checkoutItem(
                customer.fistName,
                customer.lastName,
                customer.zipCode
            )
            await expect(cartPage.complete_container).toHaveText(
                RegExp(completeContainer)
            )
        })
    })

    test('Buy item using 2 tabs', async ({
        cartPage,
        inventoryPage,
        context,
        page,
    }) => {
        await test.step('Add item to card', async () => {
            await inventoryPage.openItem('Sauce Labs Backpack')
            await inventoryPage.addToCard()
            await expect(inventoryPage.page).toHaveURL(RegExp('inventory-item'))
        })
        await test.step('Open test', async () => {
            const page2 = await context.newPage()
            cartPage.setPage = page2
            await cartPage.goto()
            await cartPage.checkout_button.click()
            await expect(inventoryPage.page).toHaveURL(RegExp('inventory-item'))
        })
    })
})
