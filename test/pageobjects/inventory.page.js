const LoginPage = require('../pageobjects/login.page');

class InventoryPage {
    get menuBtn () {return $('#react-burger-menu-btn')}
    get allItemsBtn () {return $('#inventory_sidebar_link')}
    get aboutBtn () {return $('#about_sidebar_link')}
    get logoutBtn () {return $('#logout_sidebar_link')}
    get resetBtn () {return $('#reset_sidebar_link')}
    get CompletMenu () {return $('#menu_button_container')}
    get shopCart () {return $('#shopping_cart_container')}
    get itemAdded () {return $$('.shopping_cart_badge')[0]}
    get backPackAdd () {return $('#add-to-cart-sauce-labs-backpack')}
    //Sort buttons
    get sortBtn () {return $('.product_sort_container')}
    get sortByNameAz () { return $('//*[@id="header_container"]/div[2]/div[2]/span/select/option[1]') }
    get sortByNameZa() { return $('//*[@id="header_container"]/div[2]/div[2]/span/select/option[2]') }
    get sortByPriceLoHi () { return $('//*[@id="header_container"]/div[2]/div[2]/span/select/option[3]') }
    get sortByPriceHiLo () { return $('//*[@id="header_container"]/div[2]/div[2]/span/select/option[4]') }
    //Social media buttons
    get twitterBtn () { return $('.social_twitter a')}
    get facebookBtn () { return $('.social_facebook a')}
    get linkedinBtn () { return $('.social_linkedin a')}
    //Items of the inventory
    get itemsName() { return $$('.inventory_item_name')}
    get itemsPrice() { return $$('.inventory_item_price')}


    open () {
        LoginPage.open();
        LoginPage.inputEmail.setValue('standard_user');
        LoginPage.inputPassword.setValue('secret_sauce');
        LoginPage.btnLogin.click();
    }
}

module.exports = new InventoryPage();
