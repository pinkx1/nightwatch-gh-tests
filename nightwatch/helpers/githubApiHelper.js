const { Octokit } = require("@octokit/rest");

// Инициализация Octokit с вашим токеном доступа
const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
})

module.exports = {
    /**
     * Создать репозиторий
     * @param {string} repoName - Имя репозитория
     * @returns {object} Данные о созданном репозитории
     */
    async createRepository(repoName) {
        const response = await octokit.request('POST /user/repos', {
            name: repoName
        });
        return response.data;
    },
    /**
     * Удалить репозиторий
     * @param {string} owner - Имя владельца репозитория
     * @param {string} repo - Имя репозитория
     */
    async deleteRepository(owner, repo) {
        await octokit.request('DELETE /repos/{owner}/{repo}', {
            owner: owner,
            repo: repo
        })
    }
};
