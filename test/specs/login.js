const LoginPage = require("../pageobjects/login.page");

describe("Login automation", () =>{
    beforeAll("Open browser", () => {
        LoginPage.open();
    });

    describe("Login email testing", () => {
        it("if email input is empty show the proper msg", () => {
            LoginPage.setEmail();
            LoginPage.setPassword("secret_sauce");
            LoginPage.click();
            expect(LoginPage.errorBox).toHaveText("Epic sadface: Username is required");
            browser.pause(3000);    
        });
        it("If the user is invalid show the proper msg", () => {
            LoginPage.setEmail("invalid")
            LoginPage.setPassword("secret_sauce");
            LoginPage.click();
            expect(LoginPage.errorBox).toHaveText("Epic sadface: Username and password do not match any user in this service");
        });
    })
    describe("Login password testing", () => {
        it("if password input is empty show the proper msg", () => {
            browser.refresh();
            LoginPage.setEmail("standard_user");
            LoginPage.setPassword("");
            LoginPage.click();
            expect(LoginPage.errorBox).toHaveText("Epic sadface: Password is required");
            browser.pause(3000);    
        });
        it("If the password is invalid show the proper msg", () => {
            LoginPage.setEmail("standard_user")
            LoginPage.setPassword("invalid");
            LoginPage.click();
            expect(LoginPage.errorBox).toHaveText("Epic sadface: Username and password do not match any user in this service");
        });
    });
    describe("Complete login page testing", () => {
        it("if user and password are valid get into the items page", () => {
            browser.refresh();
            LoginPage.login("standard_user", "secret_sauce");
            LoginPage.click();
            expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
        });
    });
});