module.exports = {
    url: function() {
        return this.api.launchUrl + '/session';
    },
    elements: {
        loginErrorAlert: {
            selector: 'div.js-flash-alert[role="alert"]'
        }
    }
};
