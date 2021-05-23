const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');

class CartPage {
    get removeBtn ()  {return $('#remove-sauce-labs-backpack')}
    get checkoutBtn () {return $('#checkout')}
    get continueBtn () {return $('#continue-shopping')}

    AddItem() {
        InventoryPage.open();
        InventoryPage.backPackAdd.click();
        InventoryPage.shopCart.click();
    }
}

module.exports = new CartPage();