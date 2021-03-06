const InventoryPage = require("../pageobjects/inventory.page");
// const LoginPage = require("../pageobjects/login.page");
// const CartPage = require("../pageobjects/cart.page");


describe("Inventory automation", () =>{
    beforeAll("Open browser", () => {
        InventoryPage.open();
        browser.pause(2000);
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });

    describe("Testing the burguer menu", () => {
        it("testing the menu buttons exist", () => {
            expect(InventoryPage.menuBtn).toExist();
            expect(InventoryPage.allItemsBtn).toExist();
            expect(InventoryPage.aboutBtn).toExist();
            expect(InventoryPage.logoutBtn).toExist();
            expect(InventoryPage.resetBtn).toExist();
        });
        it("testing about button function", () => {
            InventoryPage.menuBtn.click();
            InventoryPage.aboutBtn.click();
            expect(browser).toHaveUrl("https://saucelabs.com/")
        });
        it("testing logout button function", () => {
            InventoryPage.open()
            InventoryPage.menuBtn.click();
            InventoryPage.logoutBtn.click();
            expect(browser).toHaveUrl("https://www.saucedemo.com/")
        });
        it("testing reset button function", () => {
            InventoryPage.open()
            InventoryPage.backPackAdd.click();
            InventoryPage.menuBtn.click();
            InventoryPage.resetBtn.click();
            expect(InventoryPage.itemAdded).not.toExist()
        });
    });
    describe("Testing add to cart button", () => {
        it("the cart should have the item added", () => {
            InventoryPage.open();
            InventoryPage.backPackAdd.click();
            expect(InventoryPage.itemAdded).toHaveText("1");
            browser.pause(3000);
        });
    });
    describe("Testing the cart button", () => {
        it("the cart button should redirect to the cart", () => {
            InventoryPage.shopCart.click();
            expect(browser).toHaveUrl("https://www.saucedemo.com/cart.html");
            browser.pause(3000)
        });
    });
    describe("Testing footer buttons", () => {
        it('should check that the links are correct', () => {
            InventoryPage.open();
            expect(InventoryPage.twitterBtn).toHaveHref('https://twitter.com/saucelabs');
            expect(InventoryPage.facebookBtn).toHaveHref('https://www.facebook.com/saucelabs');
            expect(InventoryPage.linkedinBtn).toHaveHref('https://www.linkedin.com/company/sauce-labs/');
            browser.pause(3000)
        });
    })
    describe("Testing the sort button", () => {
        it("clicking the option NAME (AtoZ)", () => {
            InventoryPage.open();
            InventoryPage.sortByNameAz.click();
            browser.pause(2000);
            let itemsNames = InventoryPage.itemsName.map(element => element.getText())
            let sortedNames = [];
            InventoryPage.itemsName.forEach(element => {
                sortedNames.push(element.getText());
            });
            sortedNames = sortedNames.sort();
            browser.pause(2000);
            expect(itemsNames).toEqual(sortedNames);
        });
    });
});