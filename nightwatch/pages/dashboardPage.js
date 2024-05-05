module.exports = {
    url() {
        return this.api.launchUrl + '/dashboard';
    },
    elements: {
        repositoriesList: {
            selector: 'a.markdown-title[data-hovercard-type="repository"]'
        },
        profileIcon: {
            selector: 'button[aria-label="Open user account menu"]',
        },
        userNameDisplay: {
            selector: "span[class='Truncate text-bold'] span[class='Truncate-text']",
        }
    }
};
