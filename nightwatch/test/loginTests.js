describe('GitHub login functionality', function() {
    const loginPage = browser.page.loginPage();
    const dashboardPage = browser.page.dashboardPage();
    const loginErrorPage = browser.page.loginErrorPage()
    const correctUsername = process.env.CORRECT_USERNAME;
    const correctPassword = process.env.CORRECT_PASSWORD;
    const incorrectPassword = process.env.INCORRECT_PASSWORD;

    beforeEach(async () => loginPage.navigate());

    afterEach(async (browser) => browser.quit());

    it('verifies that user can log in with valid credentials',  async function(browser) {
        await loginPage.login(correctUsername, correctPassword);

        await dashboardPage.element('@profileIcon').click()
        await dashboardPage.expect.element('@userNameDisplay').text.to.contain(correctUsername)
    });
    it("verifies that user can't log in with invalid credentials",  async function(browser) {
        await loginPage.login(correctUsername, incorrectPassword);
        await loginErrorPage.assert.urlEquals(loginErrorPage.url())
        await loginErrorPage.expect.element('@loginErrorAlert').visible
    });
});
