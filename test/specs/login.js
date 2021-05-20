const LoginPage = require("../pageobjects/login.page");
const users = ['standard_user', 'problem_user', 'performance_glitch_user'];

describe("Login automation", () =>{
    beforeAll("Open browser", () => {
        LoginPage.open();
    });

    describe("Login email testing", () => {
        it("if email input is empty show the proper msg", () => {
            LoginPage.setEmail();
            LoginPage.setPassword("secret_sauce");
            LoginPage.click();
            expect(LoginPage.alertBox).toHaveText("");
            browser.pause(3000);    
        });
        it("If the user is invalid show the proper msg", () => {
            !LoginPage.setEmail(users)
            LoginPage.setPassword("secret_sauce");
            LoginPage.click();
            expect(LoginPage.alertBox).toHaveText("");
        });
    })
    describe("Login password testing", () => {
        it("if password input is empty show the proper msg", () => {
            LoginPage.setEmail(users);
            LoginPage.setPassword();
            LoginPage.click();
            expect(LoginPage.alertBox).toHaveText("");
            browser.pause(3000);    
        });
        it("If the password is invalid show the proper msg", () => {
            LoginPage.setEmail(users)
            LoginPage.setPassword("invalid");
            LoginPage.click();
            expect(LoginPage.alertBox).toHaveText("");
        });
    });
    describe("Complete login page testing", () => {
        it("if user and password are valid get into the items page", () => {
            LoginPage.login(users, "secret_sauce");
            LoginPage.click();
            expect(browser.url("https://www.saucedemo.com/inventory.html"));
        });
    });
});