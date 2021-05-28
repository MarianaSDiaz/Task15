const LoginPage = require("../pageobjects/login.page");
const InventoryPage = require("../pageobjects/inventory.page");
const CartPage = require("../pageobjects/cart.page");

describe("End to End automation", () => {
    beforeAll("Open browser", () => {
        LoginPage.open();
        browser.pause(3000);
    });

    describe("testing login", () => {
        it("login with standard user", () => {
            LoginPage.login("standard_user", "secret_sauce");
            LoginPage.btnLogin.click();
            expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
            browser.pause(3000);
        });
    });
    describe("testing inventory page", () => {
        it("select the first item of the inventory", () => {
            InventoryPage.backPackAdd.click();
            expect(InventoryPage.itemAdded).toHaveText("1");
            browser.pause(3000);
        });
        it("redirecting to the cart page", () => {
            InventoryPage.shopCart.click();
            expect(browser).toHaveUrl("https://www.saucedemo.com/cart.html");
            browser.pause(3000);
        });
    });
    describe("testing cart and checkout", () => {
        it("testing the checkout button", () => {
            CartPage.checkoutBtn.click();
            expect(browser).toHaveUrl("https://www.saucedemo.com/checkout-step-one.html");
            browser.pause(3000);
        });
        it("Completing the checkout form", () => {
            CartPage.completeCheckout("Maru", "Diaz", "2000");
            CartPage.checkoutContinue.click();
            expect(browser).toHaveUrl("https://www.saucedemo.com/checkout-step-two.html");
            browser.pause(3000);
        });
        it("finishin the shop", () => {
            CartPage.finishBtn.click();
            CartPage.backHomeBtn.click();
            expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
            browser.pause(3000);
        });
    });
    describe("testing logout", () => {
        it("loging out", () => {
            InventoryPage.menuBtn.click();
            InventoryPage.logoutBtn.click();
            expect(browser).toHaveUrl("https://www.saucedemo.com/");
            browser.pause(3000);
        });
    });
});