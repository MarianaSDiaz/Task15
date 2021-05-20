const InventoryPage = require("../pageobjects/inventory.page");
const LoginPage = require("../pageobjects/login.page");

describe("Inventory automation", () =>{
    beforeAll("Open browser", () => {
        LoginPage.open();
    });

    describe("Testing user: problem_user", () => {
        it("The images of this user are not the correct ones", () => {
            LoginPage.login("problem_user", "secret_sauce");;
            LoginPage.click();
            
            expect(InventoryPage.dogImg === InventoryPage.realImg).toBe(false);
            browser.pause(3000);    
        });
    });
});