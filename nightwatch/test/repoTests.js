const githubApiHelper = require('../helpers/githubApiHelper.js');
const { isElementInList, generateRepoName } = require('../helpers/utils.js');


describe('GitHub repo tests', function() {
    const createRepoPage = browser.page.createRepoPage();
    const repoPage = browser.page.repoPage();
    const loginPage = browser.page.loginPage()
    const repositoriesPage = browser.page.repositoriesPage()
    const dashboardPage = browser.page.dashboardPage()
    const correctUsername = process.env.CORRECT_USERNAME

    let repoName;

    beforeEach(async () => {
        await loginPage.navigate();
        await loginPage.login(correctUsername, process.env.CORRECT_PASSWORD);
        repoName = generateRepoName();
    });

    afterEach(async (browser) => browser.quit());

    it('verifies that user can create repo',  async function(browser) {
        await createRepoPage.navigate()
        await createRepoPage.createNewRepo(repoName);
        await createRepoPage.assert.urlEquals(`${browser.launchUrl}/${correctUsername}/${repoName}`);

        const isRepoFound = await isElementInList(dashboardPage, '@repositoriesList', `${correctUsername}/${repoName}`, invert = false)

        browser.assert.ok(isRepoFound, `The repo named "${repoName}" should be found`);

        //postconditions
        await githubApiHelper.deleteRepository(correctUsername, repoName);
    });
    it("verifies that user can delete repo",  async function(browser) {
        const createdRepo = await githubApiHelper.createRepository(repoName);
        await browser.navigateTo(`${browser.launchUrl}/${correctUsername}/${createdRepo.name}`);
        await repoPage.deleteRepo(repoName);
        await repositoriesPage.expect.element('@deleteRepoAlert').text.to.contain(`Your repository "${correctUsername}/${repoName}" was successfully deleted.`);

        await githubApiHelper.createRepository(2+repoName+2);
        const isRepoNotFound = await isElementInList(dashboardPage, '@repositoriesList', `${correctUsername}/${repoName}`, invert = true)

        browser.assert.ok(isRepoNotFound, `The repo named "${repoName}" should not be found`);
        await githubApiHelper.deleteRepository(correctUsername, 2+repoName+2);
    });
});
