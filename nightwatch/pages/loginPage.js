const loginCommands = {
    /**
     * Вход в аккаунт со страницы /login
     * @param {string} username - Имя пользователя
     * @param {string} password - Пароль
     */
    async login(username, password) {
        await this.setValue('@usernameField', username);
        await this.setValue('@passwordField', password);
        await this.waitForElementVisible('@signInButton');
        await this.click('@signInButton');
        return this;
    }
};

module.exports = {
    url() {
        return this.api.launchUrl + '/login';
    },
    commands: [loginCommands],
    elements: {
        usernameField: {
            selector: 'input[id="login_field"]'
        },
        passwordField: {
            selector: 'input[id="password"]'
        },
        signInButton: {
            selector: 'input[name="commit"]'
        },
        loginErrorAlert: {
            selector: 'div.js-flash-alert[role="alert"]'
        }
    }
};
