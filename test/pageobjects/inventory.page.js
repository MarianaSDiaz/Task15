const LoginPage = require('../pageobjects/login.page');

class InventoryPage {
    get dogImg () {return $$('[src="/static/media/sl-404.168b1cce.jpg"]')[0]}
    get realImg () {return $('[src="/static/media/sauce-backpack-1200x1500.34e7aa42.jpg"]')}
    get menuBtn () {return $('#react-burger-menu-btn')}
    get allItemsBtn () {return $('#inventory_sidebar_link')}
    get aboutBtn () {return $('#about_sidebar_link')}
    get logoutBtn () {return $('#logout_sidebar_link')}
    get resetBtn () {return $('#reset_sidebar_link')}
    get CompletMenu () {return $('#menu_button_container')}
    get shopCart () {return $('#shopping_cart_container')}
    get itemAdded () {return $$('.shopping_cart_badge')[0]}
    get backPackAdd () {return $('#add-to-cart-sauce-labs-backpack')}

    open () {
        LoginPage.open();
        LoginPage.inputEmail.setValue('standard_user');
        LoginPage.inputPassword.setValue('secret_sauce');
        LoginPage.btnLogin.click();
    }
}

module.exports = new InventoryPage();
