class LoginPage {
    get inputEmail () { return $('#user-name') }
    get inputPassword () { return $('#password') }
    get alertBox () { return $$('.error-button')[0] }
    get btnLogin () { return $('#login-button') }

    click () {
        this.btnLogin.click();
    }

    login (email, password) {
        this.inputEmail.setValue(email);
        this.inputPassword.setValue(password);
    }
    setEmail (value){
        this.inputEmail.click();
        this.inputEmail.setValue(value);
        this.inputEmail.keys("Tab");
    }
    setPassword (value){
        this.inputPassword.click();
        this.inputPassword.setValue(value);
        this.inputPassword.keys("Tab");
    }
    open () {
        return browser.url('https://www.saucedemo.com/');
    }
}

module.exports = new LoginPage();

