class InventoryPage {
    get dogImg () {return $$('[src="/static/media/sl-404.168b1cce.jpg"]')[0]}
    get realImg () {return $('src="/static/media/sauce-backpack-1200x1500.34e7aa42.jpg"')}


    open () {
        return browser.url('https://www.saucedemo.com/inventory.html');
    }
}

module.exports = InventoryPage();
