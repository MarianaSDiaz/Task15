const InventoryPage = require('../pageobjects/inventory.page');
const LoginPage = require('../pageobjects/login.page');

class CartPage {
    get removeBtn ()  {return $('#remove-sauce-labs-backpack')}
    get checkoutBtn () {return $('#checkout')}
    get continueBtn () {return $('#continue-shopping')}
    get cartItem () {return $$('.cart_item')[0]}
    get checkoutName () {return $('#first-name')}
    get checkoutLastName () {return $('#last-name')}
    get checkoutZip () {return $('#postal-code')}
    get checkoutContinue () {return $('#continue')}
    get checkoutCancel () {return $('#cancel')}
    get finishBtn () {return $('#finish')}


    open() {
        LoginPage.open();
        LoginPage.inputEmail.setValue('standard_user');
        LoginPage.inputPassword.setValue('secret_sauce');
        LoginPage.btnLogin.click();
    }

    addItem() {
        InventoryPage.backPackAdd.click();
        InventoryPage.shopCart.click();
    }

    completeCheckout(name, lastName, zip) {
        this.checkoutName.click();
        this.checkoutName.setValue(name);
        this.checkoutLastName.click();
        this.checkoutLastName.setValue(lastName);
        this.checkoutZip.click();
        this.checkoutZip.setValue(zip);
    }
}

module.exports = new CartPage();