const InventoryPage = require("../pageobjects/inventory.page");
const CartPage = require("../pageobjects/cart.page");

describe("Cart automation", () => {
    beforeAll("Open browser", () => {
        CartPage.open();
        CartPage.addItem();
        expect(browser).toHaveUrl("https://www.saucedemo.com/cart.html");
    });
    describe("testing cart buttons", () => {
        it("testing checkout button", () => {
            CartPage.checkoutBtn.click();
            expect(browser).toHaveUrl("https://www.saucedemo.com/checkout-step-one.html");
            browser.pause(3000);
        });
        it("testing continue shopping button", () => {
            InventoryPage.shopCart.click();
            CartPage.continueBtn.click();
            expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html")
            browser.pause(3000);
        })
        it("testing the remove button", () => {
            InventoryPage.shopCart.click();
            CartPage.removeBtn.click();
            expect(CartPage.cartItem).not.toBeExisting();
        });
    });
    describe("testing checkout page", () => {
        it("testing checkout", () => {
            CartPage.continueBtn.click();
            CartPage.addItem();
            CartPage.checkoutBtn.click();
            CartPage.completeCheckout("Maru", "Diaz", "2000");
            CartPage.checkoutContinue.click();
            CartPage.finishBtn.click();
            expect(browser).toHaveUrl("https://www.saucedemo.com/checkout-complete.html");
        });
    });
});