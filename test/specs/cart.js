const InventoryPage = require("../pageobjects/inventory.page");
const CartPage = require("../pageobjects/cart.page");

describe("Cart automation", () => {
    beforeAll("Open browser", () => {
        CartPage.AddItem();
        browser.pause(2000);
        expect(browser).ToHaveUrl("https://www.saucedemo.com/cart.html")
    });
});