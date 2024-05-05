const { isElementInList } = require('../helpers/utils.js');


describe('GitHub repo tests', function() {
    const loginPage = browser.page.loginPage()
    const topicsPage = browser.page.topicsPage()

    beforeEach(async (browser) => {
        await loginPage.navigate();
        await loginPage.login(process.env.CORRECT_USERNAME, process.env.CORRECT_PASSWORD);
    });

    afterEach(async (browser) => browser.quit());

    it("verifies that all topic descriptions are limited to 500 characters",  async function(browser) {
        await topicsPage.navigate()

        const topics = await topicsPage.element.findAll('@topicDescriptions');
        let areTopicsLengthsOk  = true;

        for (const topic of topics) {
            const currentTopicDescriptionLength  = (await topic.getText()).length;
            if (currentTopicDescriptionLength  >= 500) {
                areTopicsLengthsOk  = false;
                break;
            }
        }
        browser.assert.ok(areTopicsLengthsOk , `The length of the description of all topics is less than 500 characters`);
    });
});
