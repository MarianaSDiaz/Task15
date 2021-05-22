const LoginPage = require('../pageobjects/login.page');

class InventoryPage {
    get dogImg () {return $$('[src="/static/media/sl-404.168b1cce.jpg"]')[0]}
    get realImg () {return $('[src="/static/media/sauce-backpack-1200x1500.34e7aa42.jpg"]')}
    get menu () {return $('#react-burger-menu-btn')}
    get allItemsBtn () {return $('#inventory_sidebar_link')}
    get aboutBtn () {return $('#about_sidebar_link')}
    get logoutBtn () {return $('#logout_sidebar_link')}
    get resetBtn () {return $('#reset_sidebar_link')}

    open () {
        LoginPage.open();
        LoginPage.inputEmail.setValue('standard_user');
        LoginPage.inputPassword.setValue('secret_sauce');
        LoginPage.btnLogin.click();
    }
}

module.exports = new InventoryPage();
