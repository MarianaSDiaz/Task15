const InventoryPage = require("../pageobjects/inventory.page");
const LoginPage = require("../pageobjects/login.page");

describe("Inventory automation", () =>{
    beforeAll("Open browser", () => {
        InventoryPage.open();
        browser.pause(2000);
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });
    
    describe("Testing the burguer menu", () => {
        it("testing the menu buttons exist", () => {
            expect(InventoryPage.menu).toExist();
            expect(InventoryPage.allItemsBtn).toExist();
            expect(InventoryPage.aboutBtn).toExist();
            expect(InventoryPage.logoutBtn).toExist();
            expect(InventoryPage.resetBtn).toExist();
        })
    })
});