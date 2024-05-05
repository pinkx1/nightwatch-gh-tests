const newRepoCommands = {
    /**
     * Создает новый репозиторий
     * @param {string} name - Название репозитория
     */
    async createNewRepo(name) {
        await this.setValue('@nameField', name);
        await this.waitForElementVisible('@availabilityOfName');
        await this.click('@createRepoButton');
        return this;
    }
};

module.exports = {
    url() {
        return this.api.launchUrl + '/new';
    },
    commands: [newRepoCommands],
    elements: {
        nameField: {
            selector: 'input[data-testid="repository-name-input"]'
        },
        createRepoButton: {
            selector: "button[type='submit'] span[data-component='text']"
        },
        availabilityOfName: {
            selector: 'span[id="RepoNameInput-is-available"]'
        }
    }
};
