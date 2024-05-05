module.exports = {
    url() {
        return `${this.api.launchUrl}/topics`;
    },
    elements: {
        topicDescriptions: {
            selector: "p[class='f5 color-fg-muted mb-0 mt-1']"
        }
    }
};