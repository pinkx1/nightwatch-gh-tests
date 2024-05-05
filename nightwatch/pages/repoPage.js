const repoCommands = {
    /**
     * Удалить репозиторий
     * @param {string} repoName - Имя удаляемого репозитория
     */
    async deleteRepo(repoName) {
        await this.waitForElementVisible('@openSettingsButton');
        await this.click('@openSettingsButton');
        await this.waitForElementVisible('@deleteRepoButton');
        await this.click('@deleteRepoButton');
        await this.waitForElementVisible('@deleteRepoProceedButton');
        await this.click('@deleteRepoProceedButton');
        await this.click('@deleteRepoProceedButton');
        const verificationValue = `${process.env.CORRECT_USERNAME}/${repoName}`;
        await this.setValue('@verificationField', verificationValue);
        await this.click('@deleteRepoProceedButton');
        return this;
    }
};

module.exports = {
    url() {
        return this.api.launchUrl + '/new';
    },
    commands: [repoCommands],
    elements: {
        openSettingsButton: {
            selector: 'a[id="settings-tab"]'
        },
        deleteRepoButton: {
            selector: "button[id='dialog-show-repo-delete-menu-dialog']"
        },
        deleteRepoProceedButton: {
            selector: "button[id='repo-delete-proceed-button']"
        },
        verificationField: {
            selector: "input[id='verification_field']"
        }
    }
};
