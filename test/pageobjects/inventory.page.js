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
    get sortBtn () {return $('.product_sort_container')}
    get sortByNameAz () { return $('//*[@id="header_container"]/div[2]/div[2]/span/select/option[1]') }
    get sortByNameZa() { return $('//*[@id="header_container"]/div[2]/div[2]/span/select/option[2]') }
    get sortByPriceLoHi () { return $('//*[@id="header_container"]/div[2]/div[2]/span/select/option[3]') }
    get sortByPriceHiLo () { return $('//*[@id="header_container"]/div[2]/div[2]/span/select/option[4]') }
    //Items of the inventory
    get itemsName() { return $$('.inventory_item_name')}
    get itemsPrice() { return $$('.inventory_item_price')}
    // get backPack () {return $('#item_4_title_link')}
    // get backPackPrice () {return $('.inventory_item_price*=29.99')}
    // get boldTshirt () {return $('#item_1_title_link')}
    // get boldTshirtPrice () {return $('.inventory_item_price*=15.99"')}
    // get onesieTshirt () {return $('#item_2_title_link')}
    // get onesieTshirtPrice () {return $('.inventory_item_price*=7.99')}
    // get bikeLight () {return $('#item_0_title_link')}
    // get bikeLightPrice () {return $('.inventory_item_price*=9.99')}
    // get fleeceJacket () {return $('#item_5_title_link')}
    // get fleeceJacketPrice () {return $('.inventory_item_price*=49.99')}
    // get redTshirt () {return $('#item_3_title_link')}
    // get redTshirtPrice () {return $('.inventory_item_price*=15.99')}

    open () {
        LoginPage.open();
        LoginPage.inputEmail.setValue('standard_user');
        LoginPage.inputPassword.setValue('secret_sauce');
        LoginPage.btnLogin.click();
    }
}

module.exports = new InventoryPage();
