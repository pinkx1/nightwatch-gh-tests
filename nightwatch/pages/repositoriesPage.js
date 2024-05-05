module.exports = {
    url() {
        return `${this.api.launchUrl}${process.env.CORRECT_USERNAME}?tab=repositories`;
    },
        elements: {
        deleteRepoAlert: {
            selector: "div[role='alert']"
        }
    }
};